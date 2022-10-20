import { useConfetti } from './confetti'
import { useTrippy } from './trippy'
import { useStarfield } from './starfield'
import { useTvSnow } from './tvSnow'
import { useUnderground } from './underground'
import { useGradient } from './gradient'
import { useFluid } from './fluid.js'
import { useSmoke } from './smoke'
import { useMoltenMetal } from './moltenMetal'

export const templates = {
  confetti: useConfetti,
  moltenMetal: useMoltenMetal,
  tvSnow: useTvSnow,
  smoke: useSmoke,
  trippy: useTrippy,
  fluid: useFluid,
  gradient: useGradient,
  starfield: useStarfield,
  underground: useUnderground,
}
