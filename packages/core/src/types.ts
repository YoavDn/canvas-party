export type TTemplates = 'confetti' | 'trippy' | 'starfield' | 'tvSnow' | 'underground';

export interface IOptionsType {
  type: TTemplates;
  count?: number;
  colors?: string[];
}
