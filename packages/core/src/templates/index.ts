import { useConfetti } from './confetti';
import { useTrippy } from './trippy';
import { useStarfield } from './starfield';
import { useTvSnow } from './tvSnow';
import { useUnderground } from './underground';
import { useGradient } from './gradient';

export const templates = {
  confetti: useConfetti,
  tvSnow: useTvSnow,
  trippy: useTrippy,
  gradient: useGradient,
  starfield: useStarfield,
  underground: useUnderground,
};
