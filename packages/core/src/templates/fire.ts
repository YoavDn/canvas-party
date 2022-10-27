import { IOptionsType } from '../types'
export function useFire(c: CanvasRenderingContext2D, canvas: HTMLCanvasElement, options?: IOptionsType) {
  interface Ip {
    [key: string]: number
  }

  let w = canvas.width
  let h = canvas.height
  let msX = w / 2
  let msY = h / 2
  let n: Ip[] = []
  let m = Math.random
  let f = Math.floor
  let myReq: number

  myReq = window.requestAnimationFrame(A)

  function A() {
    c.globalCompositeOperation = 'source-over'
    c.fillStyle = options?.azula ? '#001233' : 'hsla(11, 95%, 15%, 1)'

    c.fillRect(0, 0, w, h)
    c.globalCompositeOperation = 'lighter'

    for (var i = 0; i < 35; i++) {
      var p: Ip = {}
      p.x = msX
      p.y = msY
      p.vx = m() * 40 - 5
      p.vy = m() * 40 - 7
      p.s = m() * 70 + 5
      p.r = options?.azula ? f(0.5 * m() + 20) : f(m() * 205 + 10)
      p.g = options?.azula ? f(0.5 * m() + 40) : f(0.5 * m() * 95)
      p.b = options?.azula ? f(m() * 245 + 10) : f(0.5 * m() * 45)
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

    myReq = window.requestAnimationFrame(A)

    c.font = '4.5em Permanent Marker'
    c.fillStyle = 'hsla(11, 95%, 15%,1)'
  }

  window.addEventListener('resize', function () {
    canvas.width = w = window.innerWidth
    canvas.height = h = window.innerHeight
  })
  canvas.addEventListener('mousemove', function (e) {
    msX = e.offsetX
    msY = e.offsetY
  })
  canvas.addEventListener('touchmove', function (e) {
    e.preventDefault()
    msX = e.touches[0].clientX
    msY = e.touches[0].clientY
  })

  function stop() {
    window.cancelAnimationFrame(myReq)
  }

  return {
    stop,
  }
}
