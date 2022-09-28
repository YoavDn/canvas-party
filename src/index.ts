import { tamplates } from './tamplates/index';
import { optionsType } from './types';

export function createSmartBg(el: HTMLElement, type: string, options: optionsType) {
  const canvas = document.createElement('canvas');
  const c = canvas.getContext('2d');
  let elRect = el.getBoundingClientRect();

  canvas.height = elRect.height;
  canvas.width = elRect.width;
  switch (type) {
    case 'confetti':
      tamplates.confetti(c!, canvas, options.colors, options.count);
      break;
  }

  addEventListener('resize', () => {
    elRect = el.getBoundingClientRect();
    canvas.height = elRect.height;
    canvas.width = elRect.width;
    switch (type) {
      case 'confetti':
        tamplates.confetti(c!, canvas, options.colors, options.count);
        break;
    }
  });
  el.appendChild(canvas);
  return canvas;
}
