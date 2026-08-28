/**
 * Maps a category key to a deterministic CSS gradient class used as a
 * placeholder visual when no real thumbnail/video has been supplied yet.
 * Swap in a real `thumbnail`/`video` path on the project object in
 * src/data/content.js and this placeholder is bypassed automatically.
 */
const GRADIENTS = {
  'cars-bikes': 'linear-gradient(155deg, #1a1613, #2b2115 45%, #3a2c12)',
  events: 'linear-gradient(155deg, #16151a, #221d2b 45%, #2c2436)',
  festivals: 'linear-gradient(155deg, #1a1310, #331f16 45%, #4a2a17)',
  gym: 'linear-gradient(155deg, #131414, #1f2321 45%, #24312a)',
  promotional: 'linear-gradient(155deg, #15130f, #2a2116 45%, #3d2f18)',
  social: 'linear-gradient(155deg, #131313, #201f1c 45%, #2a2620)',
};

export function categoryGradient(category) {
  return GRADIENTS[category] || GRADIENTS.social;
}
