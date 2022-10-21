export function useFire(c: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
  interface Ip {
    [key: string]: number
  }

  let w = (canvas.width = window.innerWidth)
  let h = (canvas.height = window.innerHeight)
  let msX = w / 2,
    msY = h / 2
  let n: Ip[] = []
  let m = Math.random
  let f = Math.floor

  A()

  function A() {
    c.globalCompositeOperation = 'source-over'
    c.fillStyle = 'hsla(11, 95%, 15%, 1)'
    c.fillRect(0, 0, w, h)
    c.globalCompositeOperation = 'lighter'

    for (var i = 0; i < 35; i++) {
      var p: Ip = {}
      p.x = msX
      p.y = msY
      p.vx = m() * 40 - 5
      p.vy = m() * 40 - 7
      p.s = m() * 70 + 5
      p.r = f(m() * 205 + 10)
      p.g = f(0.5 * m() * 95)
      p.b = f(0.5 * m() * 45)
      p.dx = msX
      n.push(p)
    }
    i = n.length
    while (i--) {
      p = n[i]
      p.x += p.vx
      p.y += p.vy
      p.vy -= 0.2
      p.vx += (p.dx - p.x) / p.s / 2
      p.s -= 1.8
      if (p.s < 1) {
        n.splice(i, 1)
        continue
      }
      c.beginPath()
      var g1 = 'rgba(' + p.r + ',' + p.g + ',' + p.b + ',' + p.s / 5 + ')'
      var g2 = 'rgba(' + p.r + ',' + p.g + ',' + p.b + ',0)'
      var g = c.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.s)
      g.addColorStop(0, g1)
      g.addColorStop(1, g2)
      c.fillStyle = g
      c.arc(p.x, p.y, p.s, 0, Math.PI * 2, false)
      c.fill()
    }

    window.requestAnimationFrame(A)
    c.font = '4.5em Permanent Marker'
    c.fillStyle = 'hsla(11, 95%, 15%,1)'
  }

  window.addEventListener('resize', function () {
    canvas.width = w = window.innerWidth
    canvas.height = h = window.innerHeight
  })
  document.body.addEventListener('mousemove', function (e) {
    msX = e.clientX
    msY = e.clientY
  })
  document.body.addEventListener('touchmove', function (e) {
    e.preventDefault()
    msX = e.touches[0].pageX
    msY = e.touches[0].pageY
  })
}
