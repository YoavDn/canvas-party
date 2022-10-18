export type TTemplates = 'confetti' | 'trippy' | 'starfield' | 'tvSnow' | 'underground' | 'gradient';

export interface IOptionsType {
  type: TTemplates;
  count?: number;
  colors?: string[];
}
