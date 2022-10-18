export function useGradient(c: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
  const h = 32;
  const w = 32;
  canvas.width = w;
  canvas.height = h;

  let col = (x: number, y: number, r: number, g: number, b: number) => {
    c.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
    c.fillRect(x, y, 1, 1);
  };
  let R = function (x: number, y: number, t: number) {
    return Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t));
  };

  let G = function (x: number, y: number, t: number) {
    return Math.floor(192 + 64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300));
  };

  let B = function (x: number, y: number, t: number) {
    return Math.floor(
      192 + 64 * Math.sin(5 * Math.sin(t / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100),
    );
  };

  var t = 0;

  var run = function () {
    for (let x = 0; x <= 35; x++) {
      for (let y = 0; y <= 35; y++) {
        col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
      }
    }
    t = t + 0.04;
    window.requestAnimationFrame(run);
  };

  let myReq: number;
  myReq = requestAnimationFrame(run);

  function stop() {
    window.cancelAnimationFrame(myReq);
  }

  return {
    stop,
  };
}
