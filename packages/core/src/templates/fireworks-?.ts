//@ts-ignore
import anime from 'animejs/lib/anime.es.js';

type pType = {
  x: number;
  y: number;
  color: string;
  radius: number;
  endPos?: { x: number; y: number };
  lineWidth?: number;
  alpha?: number;
  draw: () => void;
};

const PARTICULES_NUM = 30;
let isActive = false;
const COLORS = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'];



export function useFireworks(
  c: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  colors: string[] = COLORS,
  count: number = PARTICULES_NUM,
) {
  let pointerX = 0;
  let pointerY = 0;

  autoClick();

  addEventListener('resize', () => {
    canvas.width = document.body.clientWidth
    canvas.height = document.body.clientHeight
  })

  canvas.addEventListener('click', (e) => {
    pointerX = e.clientX;
    pointerY = e.clientY;
    isActive = true;
    render.play();
    animateParticules(pointerX, pointerY);
  });

  const render = anime({
    duration: Infinity,
    update: function () {
      c.clearRect(0, 0, canvas.width, canvas.height);
    },
  });

  function autoClick() {
    if (isActive) return;
    animateParticules(anime.random(0, canvas.width), anime.random(0, canvas.height));
    anime({ duration: 400 }).finished.then(autoClick);
  }

  function animateParticules(x: number, y: number) {
    const particules: pType[] = [];
    for (let i = 0; i < count; i++) {
      particules.push(createParticule(x, y));
    }
    anime.timeline().add({
      targets: particules,
      x: function (p: pType) {
        return p.endPos!.x;
      },
      y: function (p: pType) {
        return p.endPos!.y;
      },
      radius: 0.1,
      duration: anime.random(1200, 1800),
      easing: 'easeOutExpo',
      update: renderParticule,
      offest: 0,
    });
  }

  function setParticuleDirection(p: pType): { x: number; y: number } {
    var angle = (anime.random(0, 360) * Math.PI) / 180;
    var value = anime.random(50, 180);
    var radius = [-1, 1][anime.random(0, 1)] * value;
    return {
      x: p.x + radius * Math.cos(angle),
      y: p.y + radius * Math.sin(angle),
    };
  }

  function createParticule(x: number, y: number) {
    const p: pType = {
      x: x,
      y: y,
      color: colors[anime.random(0, colors.length - 1)],
      radius: anime.random(16, 32),
      draw: () => {
        c.beginPath();
        c.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
        c.fillStyle = p.color;
        c.fill();
      },
    };
    p.endPos = setParticuleDirection(p);

    return p;
  }

  function renderParticule(anim: any) {
    for (let i = 0; i < anim.animatables.length; i++) {
      anim.animatables[i].target.draw();
    }
  }
}
