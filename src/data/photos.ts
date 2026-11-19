/**
 * Photography — all images are Notes' own Instagram content (@notesroasters),
 * cropped from the screenshot supplied by the client. They are low resolution
 * (≈242px source); replace with original files when available and keep the
 * same keys so every page updates automatically.
 */

export type Photo = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

const p = (src: string, width: number, height: number, alt: string): Photo => ({
  src: `/images/${src}`,
  width,
  height,
  alt,
});

export const photos = {
  strawberryMatcha: p(
    "strawberry-matcha.webp",
    484,
    644,
    "Strawberry matcha with pink cold foam in a Notes cup printed “I love you so matcha”, under the espresso machine",
  ),
  smoresGreen: p(
    "smores-green.webp",
    484,
    644,
    "Iced smores latte with toasted marshmallows in a green-and-cream striped Notes cup on a green counter",
  ),
  smoresIced: p(
    "smores-iced.webp",
    484,
    644,
    "Iced smores latte in a striped Notes cup on a wooden tray scattered with coffee beans",
  ),
  v60Pour: p(
    "v60-pour.webp",
    484,
    572,
    "Ground coffee poured into a V60 dripper on a scale, with Notes coffee bags and cups behind",
  ),
  whippedCream: p(
    "whipped-cream.webp",
    484,
    572,
    "A striped Notes cup topped with whipped cream in front of stacked Notes ceramic cups",
  ),
  icedBlack: p(
    "iced-black.webp",
    484,
    452,
    "Iced black coffee in a striped Notes cup held against a green wall",
  ),
  trayDuck: p(
    "tray-duck.webp",
    484,
    344,
    "A striped Notes drink served on a wooden tray with two small rubber ducks",
  ),
  strawberryFoam: p(
    "strawberry-foam.webp",
    484,
    256,
    "Close-up of pink strawberry foam dusted with matcha",
  ),
  marshmallow: p("marshmallow.webp", 484, 256, "Close-up of marshmallows on a smores drink"),
  matchaSwirl: p("matcha-swirl.webp", 484, 234, "Close-up of a swirl of whisked matcha"),
} satisfies Record<string, Photo>;
