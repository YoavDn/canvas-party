import { tamplates } from './tamplates/index';
import { optionsType } from './types';

export function createSmartBg(el: HTMLElement, options: optionsType) {
  const canvas = document.createElement('canvas');
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  const c = canvas.getContext('2d');
  let elRect = el.getBoundingClientRect();

  canvas.height = elRect.height;
  canvas.width = elRect.width;
  switch (options.type) {
    case 'confetti':
      tamplates.confetti(c!, canvas, options.colors, options.count);
      break;
    case 'trippy':
      tamplates.trippy(c!, canvas);
      break;
    case 'fireworks':
      tamplates.fireworks(c!, canvas);
      break;
      case 'starfield':
      tamplates.starfield(c!, canvas);
      break;
  }

  addEventListener('resize', () => {
    elRect = el.getBoundingClientRect();
    canvas.height = elRect.height;
    canvas.width = elRect.width;

    switch (options.type) {
      case 'confetti':
        tamplates.confetti(c!, canvas, options.colors, options.count);
        break;
      case 'trippy':
        tamplates.trippy(c!, canvas);
        break;
    }
  });

  return canvas;
}
