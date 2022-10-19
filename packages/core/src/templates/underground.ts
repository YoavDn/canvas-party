export function useUnderground(c: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
  var w = canvas.width
  var h = canvas.height
  var _w = w / 2
  var _h = h / 2

  var dp = -0.15
  var t = 0
  var u = 0

  class pt {
    x: number
    y: number
    constructor(x: number, y: number) {
      this.x = x
      this.y = y
    }
  }

  function calc(ang: number, d: number) {
    var p1 = w / 10
    var p2 = h / 2
    var b = Math.sin(ang + t) + Math.cos(ang + t)

    return new pt(
      _w + (p2 * Math.cos(ang) + p1 * Math.sin(d + 3 * t)) / d + Math.cos(ang) * b,
      _h + (p2 * Math.sin(ang)) / d + Math.sin(ang) * b,
    )
  }

  function tunnel(ang: number, deltaA: number, d: number, deltaB: number) {
    var pts = [calc(ang, d), calc(ang + deltaA, d), calc(ang + deltaA, d + deltaB), calc(ang, d + deltaB)]
    var i = 1
    c.beginPath()
    c.moveTo(pts[0].x, pts[0].y)
    while (true) {
      c.lineTo(pts[i].x, pts[i].y)
      if (++i >= pts.length) break
    }
    c.closePath()
    c.fill()
  }

  function draw() {
    t += 1 / 50
    c.fillStyle = 'hsla(0,0%,0%,1)'
    c.fillRect(0, 0, w, h)
    var num = 5
    var ang = 0
    var deltaA = (Math.PI * 2) / num
    var d = dp + 10
    var deltaB = 0.15
    var dark
    var lum

    var i

    while (true) {
      i = 0
      while (true) {
        dark = 1 / Math.max(d + 0.5 - 4, 1)
        if (d <= 2) {
          dark = Math.max(-1, ((d / 2) * d) / 2)
        }
        lum = 125 * (dark * Math.abs(Math.sin((i / num) * (Math.PI * 2) + t)))
        lum *= 0.45 + 0.55 * Math.cos((i / num + 0.55) * Math.PI * 3.5)
        c.fillStyle = 'hsla(' + u + ', 95%,' + lum + '%,1)'
        tunnel(ang, deltaA, d, deltaB)
        ang += deltaA
        if (++i >= num) break
      }
      if ((d -= deltaB) <= dp) break
    }
    if ((dp -= 0.05) <= deltaB) dp += deltaB
    u -= 0.5
  }

  function resizeCanvas() {
    canvas.width = w = window.innerWidth
    canvas.height = h = window.innerHeight
  }

  window.addEventListener('resize', resizeCanvas, false)

  let myReq: number

  function run() {
    myReq = window.requestAnimationFrame(run)
    draw()
  }

  myReq = window.requestAnimationFrame(run)

  function stop() {
    window.cancelAnimationFrame(myReq)
    window.removeEventListener('resize', resizeCanvas)
  }

  return {
    stop,
  }
}
