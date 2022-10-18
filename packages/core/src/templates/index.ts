import { useConfetti } from './confetti';
import { useTrippy } from './trippy';
import { useStarfield } from './starfield';
import { useTvSnow } from './tvSnow';
import { useUnderground } from './underground';

export const templates = {
  confetti: useConfetti,
  tvSnow: useTvSnow,
  trippy: useTrippy,
  starfield: useStarfield,
  underground: useUnderground,
};
