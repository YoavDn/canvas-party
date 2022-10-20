export function useMoltenMetal(c: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
  var wh = 128
  var w2h = wh * wh
  canvas.width = canvas.height = wh
  var img = c!.createImageData(wh, wh)
  var id = img.data
  var t = 0
  var inc = 1 / wh
  var arr: number[] = []
  // let db = document.body;

  function hue(c: any) {
    return 255 * Math.min(Math.max(c, 0), 1)
  }
  function ease(x: number) {
    return x > 0.2 ? 0 : i(1, 0, x * 6)
  }

  function i(c: number, db: number, t: number) {
    t = t * t * t * (6 * t * t - 15 * t + 10)
    return c + (db - c) * t
  }
  function n(x: number, y: number) {
    var i = Math.abs(x * wh + y) % w2h
    return arr[i]
  }

  function p(x: number, y: number) {
    var nx = Math.floor(x)
    var ny = Math.floor(y)
    return i(i(n(nx, ny), n(nx + 1, ny), x - nx), i(n(nx, ny + 1), n(nx + 1, ny + 1), x - nx), y - ny)
  }

  function oct(x: number, y: number) {
    var o1 = p(x * 3.0, y * 4.0)
    var o2 = p(x * 4.0, y * 5.0)
    return o1 + o2 * 0.5
  }

  for (let k = 0; k < w2h; ++k) {
    arr[k] = Math.random() * 1.5 - 0.5
  }

  let myReq: number

  function draw() {
    myReq = window.requestAnimationFrame(draw)
    t += inc
    for (var x = 1; x >= 0; x -= inc) {
      for (var y = 1; y >= 0; y -= inc) {
        var idx = (y * wh + x) * wh * 4
        var dx = x
        var dy = y
        var dist = Math.sqrt(dx * dx + dy * dy)
        var ax = oct(x, y)
        var ay = oct(x + 2, y + t / 3)
        var bx = oct(x + dist * 0.3 + ax / 22 + 0.7, y + ay / 5 + 2)
        var by = oct(x + ax / 3 + 4 * t, y + ay / 3 + 5)
        var n = oct(x + bx / 5, y + by / 2) * 0.7 + 0.15
        var d = (ax * by) / 2
        var e = (ay * bx) / 2

        id[idx + 0] = hue(n + d / 5)
        id[idx + 1] = hue(n / 3 + e / 5 + d)
        id[idx + 2] = hue(d + e)
        id[idx + 3] = hue(1 - ease(dist) * (e + d) * 5)
      }
    }
    c!.putImageData(img, 0, 0)
  }

  myReq = window.requestAnimationFrame(draw)

  function stop() {
    window.cancelAnimationFrame(myReq)
  }

  return {
    stop,
  }
}
