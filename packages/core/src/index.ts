import { templates } from './templates/index.js';
import { IOptionsType, TTemplates } from './types';

export function useCanvasParty(el: HTMLElement, options: IOptionsType) {
  let type = options.type;
  console.log('here core ');

  const canvas = document.createElement('canvas');
  const c = canvas.getContext('2d');
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  let elRect = el.getBoundingClientRect();

  canvas.height = elRect.height;
  canvas.width = elRect.width;

  //template chooser
  const { colors, count } = options;
  let template: any;

  function drawTemplate() {
    if (options.type === 'confetti') {
      template = templates[type](c!, canvas, colors, count);
    } else {
      template = templates[type](c!, canvas);
    }
  }
  drawTemplate();

  function setCanvasParty(newType: TTemplates) {
    type = newType;
    drawTemplate();
  }

  function removeCanvas() {
    template.stop();
  }

  window.requestAnimationFrame;
  return {
    setCanvasParty,
    canvas,
    removeCanvas,
  };
}
