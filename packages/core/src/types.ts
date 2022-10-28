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

export interface ICanvasSettings {
  type: TTemplates
  options?: IOptionsType
}
export interface IOptionsType {
  count?: number
  colors?: string[]
  color?: string
  azula?: boolean
}
