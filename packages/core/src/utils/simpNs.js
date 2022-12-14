/*** SIMPLEX PERLIN NOISE ***
Based on Sean McCullough's port
of Stefan Gustavson's java 2D SimplexNoise: http://gist.github.com/304522
********************************/

export default function SimpNs() {}
SimpNs.grd = [
  [1, 1, 0],
  [-1, 1, 0],
  [1, -1, 0],
  [-1, -1, 0],
  [1, 0, 1],
  [-1, 0, 1],
  [1, 0, -1],
  [-1, 0, -1],
  [0, 1, 1],
  [0, -1, 1],
  [0, 1, -1],
  [0, -1, -1],
]
SimpNs.simplex = [
  [0, 1, 2, 3],
  [0, 1, 3, 2],
  [0, 0, 0, 0],
  [0, 2, 3, 1],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 2, 3, 0],
  [0, 2, 1, 3],
  [0, 0, 0, 0],
  [0, 3, 1, 2],
  [0, 3, 2, 1],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 3, 2, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 2, 0, 3],
  [0, 0, 0, 0],
  [1, 3, 0, 2],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [2, 3, 0, 1],
  [2, 3, 1, 0],
  [1, 0, 2, 3],
  [1, 0, 3, 2],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [2, 0, 3, 1],
  [0, 0, 0, 0],
  [2, 1, 3, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [2, 0, 1, 3],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [3, 0, 1, 2],
  [3, 0, 2, 1],
  [0, 0, 0, 0],
  [3, 1, 2, 0],
  [2, 1, 0, 3],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [3, 1, 0, 2],
  [0, 0, 0, 0],
  [3, 2, 0, 1],
  [3, 2, 1, 0],
]
SimpNs.pt = [
  151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21,
  10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149,
  56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229,
  122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209,
  76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217,
  226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42,
  223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98,
  108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179,
  162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50,
  45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180,
]
SimpNs.arr = []
for (var i = 0; i < 512; i++) {
  SimpNs.arr[i] = SimpNs.pt[i & 255]
}
SimpNs.part = function part(a, x, y) {
  return a[0] * x + a[1] * y
}
SimpNs.floor = function (num) {
  return num << 0
}
SimpNs.noise = function noise(xn, yn) {
  var _n, n1, n2

  var n2 = 0.5 * (Math.sqrt(3) - 1)
  var s = (xn + yn) * n2
  var i = SimpNs.floor(xn + s)
  var j = SimpNs.floor(yn + s)
  var o2 = (3 - Math.sqrt(3)) / 6
  var t = (i + j) * o2
  var _x = i - t
  var _y = j - t
  var _x1 = xn - _x
  var _y1 = yn - _y
  var i1, j1
  if (_x1 > _y1) {
    i1 = 1
    j1 = 0
  } else {
    i1 = 0
    j1 = 1
  }
  var x1 = _x1 - i1 + o2
  var y1 = _y1 - j1 + o2
  var x2 = _x1 - 1 + 2 * o2
  var y2 = _y1 - 1 + 2 * o2
  var _i = i & 255
  var _j = j & 255
  var _h = SimpNs.arr[_i + SimpNs.arr[_j]] % 12
  var _h1 = SimpNs.arr[_i + i1 + SimpNs.arr[_j + j1]] % 12
  var _h2 = SimpNs.arr[_i + 1 + SimpNs.arr[_j + 1]] % 12
  var _t = 0.5 - _x1 * _x1 - _y1 * _y1
  if (_t < 0) {
    _n = 0
  } else {
    _t *= _t
    _n = _t * _t * this.part(SimpNs.grd[_h], _x1, _y1)
  }
  var t1 = 0.5 - x1 * x1 - y1 * y1
  if (t1 < 0) {
    n1 = 0
  } else {
    t1 *= t1
    n1 = t1 * t1 * this.part(SimpNs.grd[_h1], x1, y1)
  }
  var t2 = 0.5 - x2 * x2 - y2 * y2
  if (t2 < 0) {
    n2 = 0
  } else {
    t2 *= t2
    n2 = t2 * t2 * this.part(SimpNs.grd[_h2], x2, y2)
  }
  return 20 * (_n + n1 + n2)
}
