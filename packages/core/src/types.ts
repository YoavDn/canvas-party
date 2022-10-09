export type TTamplates = 'confetti' | 'trippy' | 'fireworks' | 'starfield' | 'tvSnow' | 'underground';

export interface IOptionsType {
  type: TTamplates;
  count?: number;
  colors?: string[];
}
