export type TTemplates = 'confetti' | 'trippy' | 'starfield' | 'tvSnow' | 'underground' | 'gradient' | 'fluid' | 'smoke'

export interface IOptionsType {
  type: TTemplates
  count?: number
  colors?: string[]
}
