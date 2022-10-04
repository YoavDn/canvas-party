

export function useTvSnow(c: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {

const w = canvas.width;
const  h = canvas.height;
const  id = c.createImageData(w, h);

function draw() {
  window.requestAnimationFrame(draw);
    var r;
    for (var p = 4 * (w * h - 1); p >= 0; p -= 4) {
        r = Math.random();
        id.data[p] = id.data[p+1] = id.data[p+2] = 255 * Math.pow(r, 1.6);
        id.data[p+3] = 255;
    }
    c.putImageData(id, 0, 0);
}

draw();
    
}