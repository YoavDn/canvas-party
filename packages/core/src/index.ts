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
  const { colors, count } = options;
  if (options.type === 'confetti' || options.type === 'fireworks') {
    tamplates[options.type](c!, canvas, colors, count);
  } else {
    tamplates[options.type](c!, canvas);
  }

  return canvas;
}
