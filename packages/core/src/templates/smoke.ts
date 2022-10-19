export function useSmoke(c: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
  let myReq: number
  const requestAnimationFrame = window.requestAnimationFrame

  var w = (canvas.width = window.innerWidth)
  var h = (canvas.height = window.innerHeight)
  const particles: any = {}
  let particleIndex = 0
  const maxParticles = 40
  let hue = 0
  let mouseX: number | null
  let mouseY: number | null

  function resizeCanvas() {
    w = canvas.width = window.innerWidth
    h = canvas.height = window.innerHeight
  }

  // function Particle() {
  //   this.x = mouseX || w / 2;
  //   this.y = mouseY || h / 3;
  //   this.size = this.random(50);
  //   this.color = 'hsla(' + hue + ', 100%, 50%, .01)';
  //   this.maxLife = this.random(200);
  //   this.life = 0;
  //   this.vx = this.random(-5, 5);
  //   this.vy = this.random(-3, 3);
  //   this.grav = 0.003;
  //   this.index = particleIndex;
  //   particles[particleIndex] = this;
  //   particleIndex++;
  // }

  class Particle {
    x: number
    y: number
    size: number
    color: string
    maxLife: number
    life: number
    vx: number
    vy: number
    index: number
    grav: number

    constructor() {
      this.x = mouseX || w / 2
      this.y = mouseY || h / 3
      this.size = this.random(0, 50)
      this.color = 'hsla(' + hue + ', 100%, 50%, .01)'
      this.maxLife = this.random(0, 200)
      this.life = 0
      this.vx = this.random(-5, 5)
      this.vy = this.random(-3, 3)
      this.grav = 0.003
      this.index = particleIndex
      particles[particleIndex] = this
      particleIndex++
    }

    draw() {
      c.fillStyle = this.color
      c.fillRect(this.x, this.y, this.size, this.size)
      this.update()
    }

    update() {
      if (this.life >= this.maxLife) {
        delete particles[this.index]
      }
      this.x += this.vx
      this.y += this.vy
      this.vy += this.grav
      this.life++
    }

    random(min: number, max: number) {
      // min = Math.ceil(min)
      // max = Math.floor(max)
      return Math.random() * (max - min + 1) + min
    }
  }

  function animate() {
    c.fillStyle = 'rgba(0,0,0,.1)'
    c.fillRect(0, 0, w, h)

    for (var i = 0; i < maxParticles; i++) {
      particles[i] = new Particle()
    }
    for (let i in particles) {
      particles[i].draw()
    }

    hue += 0.3
    myReq = requestAnimationFrame(animate)
  }

  window.addEventListener('resize', function () {
    resizeCanvas()
  })

  canvas.addEventListener('mousemove', function (e) {
    mouseX = e.offsetX
    mouseY = e.offsetY
  })

  canvas.addEventListener('mouseleave', function (e) {
    mouseX = null
    mouseY = null
  })

  myReq = requestAnimationFrame(animate)

  function stop() {
    window.cancelAnimationFrame(myReq)
  }

  return {
    stop,
  }
}
