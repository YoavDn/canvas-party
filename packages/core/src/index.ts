import { templates } from './templates/index.js';
import { IOptionsType, TTemplates } from './types';

const webglParams = {
  alpha: true,
  depth: false,
  stencil: false,
  antialias: false,
  preserveDrawingBuffer: false,
};

export function useCanvasParty(el: HTMLElement, options: IOptionsType) {
  let type: TTemplates = options.type;

  let canvas = document.createElement('canvas');

  let c = options.type === 'fluid' ? canvas.getContext('webgl2', webglParams) : canvas.getContext('2d');

  canvas.style.width = '100%';
  canvas.style.height = '100%';
  let elRect = el.getBoundingClientRect();

  canvas.height = elRect.height;
  canvas.width = elRect.width;

  //template chooser
  const { colors, count } = options;
  let template: any;

  function drawTemplate() {
    if (type === 'confetti') {
      template = templates[type](c! as CanvasRenderingContext2D, canvas, colors, count);
    } else if (type === 'fluid') {
      template = templates[type](c! as WebGL2RenderingContext, canvas);
    } else {
      template = templates[type](c! as CanvasRenderingContext2D, canvas);
    }
  }
  drawTemplate();

  function setCanvasParty(newType: TTemplates) {
    if (Object.keys(templates).includes(type)) {
      template.stop();

      if (type === 'fluid') {
        canvas = document.createElement('canvas');
        c = canvas.getContext('2d');
        console.log(c);
      }

      type = newType;
      drawTemplate();
    } else {
      console.error('Invalid canvasParty template name');
    }
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
