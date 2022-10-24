import SimpNs from '../utils/simpNs'

export function useFlow(
  c: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  color: string = 'hsla(218, 95%, 5%, 1)',
) {
  const dir = function (l: number, radi: number) {
    return [l * Math.sin(radi), l * Math.cos(radi)]
  }
  let mw = ((Math.PI / 3) * 7) / canvas.width
  let mh = Math.PI / 2 / canvas.height

  class Parts {
    pos: number[]
    constructor(x: number, y: number) {
      this.pos = [x, y]
    }

    upd(canvas: HTMLCanvasElement) {
      let _arr2 = []
      _arr2[0] = this.pos[0]
      _arr2[1] = this.pos[1]
      let res = dir(25, Math.PI * 2.8 * SimpNs.noise(_arr2[0] * mw * 0.25, _arr2[1] * mh * 1.18))

      _arr2[0] += res[0]
      _arr2[1] += res[1]

      c.beginPath()
      c.moveTo(_arr2[0], _arr2[1])
      c.lineTo(this.pos[0], this.pos[1])
      c.stroke()

      this.pos[0] = _arr2[0]
      this.pos[1] = _arr2[1]

      if (this.pos[0] < 0 || this.pos[0] > canvas.width) {
        this.pos[0] = Math.floor(Math.random() * canvas.width)
        this.pos[1] = Math.floor(Math.random() * canvas.width)
      } else if (this.pos[1] < 0 || this.pos[1] > canvas.height) {
        this.pos[0] = Math.floor(Math.random() * canvas.width)
        this.pos[1] = Math.floor(Math.random() * canvas.width)
      }
    }
  }

  const _arr3: any[] = []
  for (var i = 0; i < 4500; i++) {
    _arr3.push(new Parts(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)))
  }

  c.fillStyle = 'hsla(0, 0%, 0%, .04)'
  c.strokeStyle = color

  let myReq: number

  function go() {
    c.globalCompositeOperation = 'source-over'
    c.fillRect(0, 0, canvas.width, canvas.height)
    c.globalCompositeOperation = 'lighter'
    for (var i in _arr3) {
      _arr3[i].upd(canvas)
    }
    myReq = window.requestAnimationFrame(go)
  }
  canvas.addEventListener(
    'resize',
    function () {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    },
    false,
  )

  myReq = window.requestAnimationFrame(go)

  function stop() {
    window.cancelAnimationFrame(myReq)
  }

  return {
    stop,
  }
}
