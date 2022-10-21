export type TTemplates =
  | 'confetti'
  | 'trippy'
  | 'starfield'
  | 'tvSnow'
  | 'underground'
  | 'gradient'
  | 'fluid'
  | 'smoke'
  | 'moltenMetal'
  | 'fire'

export interface IOptionsType {
  type: TTemplates
  count?: number
  colors?: string[]
}
