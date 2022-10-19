const NUM_CONFETTI = 350
const COLORS = ['#ff579fd9', '#bbdfc5d9', '#bab700d9', '#60935dd9', '#f8b646d9']
const PI_2 = 2 * Math.PI

export function useConfetti(
  c: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  colors: string[] = COLORS,
  confettiCount: number = NUM_CONFETTI,
) {
  let h: number
  let w: number

  const cofetties: Confeti[] = []
  for (let i = 0; i < confettiCount; i++) {
    cofetties.push(new Confeti(canvas, c, colors))
  }

  canvas.addEventListener('mousemove', (e) => {
    cofetties.forEach((cofetti) => (cofetti.xpos = e.offsetX / canvas.width))
  })

  let myReq: number

  function step() {
    c.clearRect(0, 0, canvas.width, canvas.height)
    cofetties.forEach((cofetti) => cofetti.draw())
    myReq = requestAnimationFrame(step)
  }
  // step();

  myReq = requestAnimationFrame(step)

  function stop() {
    window.cancelAnimationFrame(myReq)
  }

  return {
    stop,
  }
}

/// class logic

const range = (a: number, b: number) => (b - a) * Math.random() + a

const drawCircle = (x: number, y: number, r: number, style: string, c: CanvasRenderingContext2D) => {
  c.beginPath()
  c.arc(x, y, r, 0, PI_2, false)
  c.fillStyle = style
  c.fill()
}

class Confeti {
  c: CanvasRenderingContext2D
  xpos = 0.5
  h: number
  w: number
  opacity: number
  dop: number
  x: number
  y: number
  xmax: number
  ymax: number
  vx: number
  vy: number
  style: string
  rgb: string
  r: number
  r2: number

  constructor(canvas: HTMLCanvasElement, c: CanvasRenderingContext2D, colors: string[]) {
    this.style = colors[Math.round(range(0, colors.length - 1))]
    this.rgb = hexToRGB(this.style)
    this.r = Math.round(range(1, 4))
    this.r2 = this.r * 2
    this.c = c
    this.h = canvas.height
    this.w = canvas.width
    this.opacity = 0
    this.dop = 0.03 * range(1, 4)
    this.x = range(-this.r2, this.w - this.r2)
    this.y = range(-20, this.h - this.r2)
    this.xmax = this.w - this.r
    this.ymax = this.h - this.r
    this.vx = range(0, 2) + 8 * (this.xpos - 5)
    this.vy = 0.7 * range(-1, 1)
  }

  replace() {
    this.opacity = 0
    this.dop = 0.03 * range(1, 4)
    this.x = range(-this.r2, this.w - this.r2)
    this.y = range(-20, this.h - this.r2)
    this.xmax = this.w - this.r
    this.ymax = this.h - this.r
    this.vx = range(0, 2) + 8 * this.xpos - 5
    this.vy = 0.7 * this.r + range(-1, 1)
  }

  draw() {
    this.x += this.vx
    this.y += this.vy
    this.opacity += this.dop
    if (this.opacity > 1) {
      this.opacity = 1
      this.dop *= -1
    }
    if (this.opacity < 0 || this.y > this.ymax) this.replace()
    if (0 < this.x || this.x < this.xmax) this.x = (this.x + this.xmax) % this.xmax

    drawCircle(Math.round(this.x), Math.round(this.y), this.r, `${this.rgb},${this.opacity})`, this.c)
  }
}

function hexToRGB(hex: string) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16)

  // rgba(${this.style[0]},${this.style[1]},${this.style[2]}`
  return `rgba(${r},${g},${b}`
}
