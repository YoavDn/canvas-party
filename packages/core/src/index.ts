import { tamplates } from './tamplates/index';
import { IOptionsType } from './types';

export function createCanvasParty(el: HTMLElement, options: IOptionsType) {
  const canvas = document.createElement('canvas');
  const c = canvas.getContext('2d');
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  let elRect = el.getBoundingClientRect();

  canvas.height = elRect.height;
  canvas.width = elRect.width;

  //tamplate chooser
  const {colors, count} = options

  switch (options.type) {
    case 'confetti':
      tamplates.confetti(c!, canvas, colors, count);
      break;
    case 'trippy':
      tamplates.trippy(c!, canvas,);
      break;
    case 'fireworks':
      tamplates.fireworks(c!, canvas, colors, count);
      break;
      case 'starfield':
      tamplates.starfield(c!, canvas);
      break;
       case 'tvSnow':
      tamplates.tvSnow(c!, canvas);
      break;
      case 'underground':
      tamplates.underground(c!, canvas);
      break;
  }
  
  return canvas;
}
