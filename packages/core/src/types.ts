export type TTemplates = 'confetti' | 'trippy' | 'starfield' | 'tvSnow' | 'underground' | 'gradient' | 'fluid';

export interface IOptionsType {
  type: TTemplates;
  count?: number;
  colors?: string[];
}
