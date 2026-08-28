const BASE_URL = import.meta.env.BASE_URL;

export const SITE = {
  name: 'MA Prime Quality',
  tagline: 'EDITORS',
  quote: "WE DON'T JUST EDIT. WE CREATE THE MOMENT.",

  logo: `${BASE_URL}media/images/logo.jpeg`,

  instagramHandle: '@ma_primequality',
  instagramUrl: 'https://instagram.com/ma_primequality',

  youtubeHandle: '@maprimequality',
  youtubeUrl:
    'https://youtube.com/@maprimequality?si=z_DTu02QagZcPTPS',

  facebookHandle: 'MA Prime quality',
  facebookUrl: 'https://www.facebook.com/share/1HkHrXGcWn/',

  whatsappNumber: '+91 9974301612',
  whatsappUrl: 'https://wa.me/919974301612',

  email: 'maprimequality@gmail.com',

  year: 2026,
};

export const NAV_LINKS = [
  {
    index: '01',
    label: 'HOME',
    href: '#home',
  },
  {
    index: '02',
    label: 'WORK',
    href: '#work',
  },
  {
    index: '03',
    label: 'SERVICES',
    href: '#services',
  },
  {
    index: '04',
    label: 'EXPERIENCE',
    href: '#process',
  },
  {
    index: '05',
    label: 'ABOUT',
    href: '#about',
  },
  {
    index: '06',
    label: 'CONTACT',
    href: '#contact',
  },
];

export const CATEGORIES = [
  {
    key: 'all',
    label: 'ALL',
  },
  {
    key: 'cars-bikes',
    label: 'CARS & BIKES',
  },
  {
    key: 'events',
    label: 'EVENTS',
  },
  {
    key: 'festivals',
    label: 'FESTIVALS',
  },
  {
    key: 'gym',
    label: 'GYM',
  },
  {
    key: 'promotional',
    label: 'PROMOTIONAL',
  },
  {
    key: 'social',
    label: 'SOCIAL',
  },
];

export const PROJECTS = [
  {
    id: 'cars-bikes-01',
    title: 'Cars & Bikes 01',
    category: 'cars-bikes',
    categoryLabel: 'AUTOMOTIVE',
    year: 2026,

    thumbnail:
      `${BASE_URL}media/images/thumbnails/Cars&Bikes-01.jpg`,

    video:
      'https://res.cloudinary.com/nbjquwcy/video/upload/v1787933389/Cars_Bikes-01.mp4',

    description:
      'High-octane color grading and rhythm-cut edit built around engine notes and road texture.',
  },

  {
    id: 'cars-bikes-02',
    title: 'Cars & Bikes 02',
    category: 'cars-bikes',
    categoryLabel: 'AUTOMOTIVE',
    year: 2026,

    thumbnail:
      `${BASE_URL}media/images/thumbnails/Cars&Bikes-02.jpg`,

    video:
      'https://res.cloudinary.com/nbjquwcy/video/upload/v1787933391/Cars_Bikes-02.mp4',

    description:
      'A rider-first cut pairing kinetic camera work with a driving sound design pass.',
  },

  {
    id: 'event-01',
    title: 'Event 01',
    category: 'events',
    categoryLabel: 'EVENTS',
    year: 2026,

    thumbnail:
      `${BASE_URL}media/images/thumbnails/Event-01.jpg`,

      video:
      'https://res.cloudinary.com/nbjquwcy/video/upload/v1787934460/Event-01.mp4',

    description:
      'Multi-camera event coverage distilled into a single emotional highlight reel.',
  },

  {
    id: 'event-02',
    title: 'Event 02',
    category: 'events',
    categoryLabel: 'EVENTS',
    year: 2025,

    thumbnail:
      `${BASE_URL}media/images/thumbnails/Event-02.jpg`,

    video:
      'https://res.cloudinary.com/nbjquwcy/video/upload/v1787933557/Event-02.mp4',

    description:
      'A wedding-day aftermovie built around candid moments and natural sound.',
  },

  {
    id: 'event-03',
    title: 'Event 03',
    category: 'events',
    categoryLabel: 'EVENTS',
    year: 2025,

    thumbnail:
      `${BASE_URL}media/images/thumbnails/Event-03.jpg`,

    video:
      'https://res.cloudinary.com/nbjquwcy/video/upload/v1787933525/Event-03.mp4',

    description:
      'Ceremony-to-reception storytelling with slow, deliberate pacing.',
  },

  {
    id: 'festival-01',
    title: 'Festival 01',
    category: 'festivals',
    categoryLabel: 'FESTIVALS',
    year: 2026,

    thumbnail:
      `${BASE_URL}media/images/thumbnails/Festival-01.jpg`,

    video:
      'https://res.cloudinary.com/nbjquwcy/video/upload/v1787933442/Festival-01.mp4',

    description:
      'Crowd energy and stage lighting cut to the drop of the headline set.',
  },

  {
    id: 'festival-02',
    title: 'Festival 02',
    category: 'festivals',
    categoryLabel: 'FESTIVALS',
    year: 2025,

    thumbnail:
      `${BASE_URL}media/images/thumbnails/Festival-02.jpg`,

    video:
      'https://res.cloudinary.com/nbjquwcy/video/upload/v1787933421/Festival-02.mp4',

    description:
      'A festival recap built from hundreds of clips into one cohesive arc.',
  },

  {
    id: 'festival-03',
    title: 'Festival 03',
    category: 'festivals',
    categoryLabel: 'FESTIVALS',
    year: 2025,

    thumbnail:
      `${BASE_URL}media/images/thumbnails/Festival-03.jpg`,

    video:
      'https://res.cloudinary.com/nbjquwcy/video/upload/v1787933394/Festival-03.mp4',

    description:
      'Color and light choreography mirroring the rhythm of a live set.',
  },

  {
    id: 'festival-04',
    title: 'Festival 04',
    category: 'festivals',
    categoryLabel: 'FESTIVALS',
    year: 2024,

    thumbnail:
      `${BASE_URL}media/images/thumbnails/Festival-04.jpg`,

    video:
      'https://res.cloudinary.com/nbjquwcy/video/upload/v1787934457/Festival-04.mp4',

    description:
      'Night-shoot footage graded for depth, warmth and scale.',
  },

  {
    id: 'gym-01',
    title: 'Gym 01',
    category: 'gym',
    categoryLabel: 'FITNESS',
    year: 2026,

    thumbnail:
      `${BASE_URL}media/images/thumbnails/GYM-01.jpg`,

    video:
      'https://res.cloudinary.com/nbjquwcy/video/upload/v1787933427/GYM-01.mp4',

    description:
      'A punchy transformation edit driven by tight match-cuts and impact sound.',
  },

  {
    id: 'gym-02',
    title: 'Gym 02',
    category: 'gym',
    categoryLabel: 'FITNESS',
    year: 2025,

    thumbnail:
      `${BASE_URL}media/images/thumbnails/GYM-02.jpg`,

    video:
      'https://res.cloudinary.com/nbjquwcy/video/upload/v1787933411/GYM-02.mp4',

    description:
      'Training-floor coverage edited for intensity and momentum.',
  },

  {
    id: 'gym-03',
    title: 'Gym 03',
    category: 'gym',
    categoryLabel: 'FITNESS',
    year: 2025,

    thumbnail:
      `${BASE_URL}media/images/thumbnails/GYM-03.jpg`,

    video:
      'https://res.cloudinary.com/nbjquwcy/video/upload/v1787934449/GYM-03.mp4',

    description:
      'A brand piece for a fitness studio, cut to a disciplined, confident pace.',
  },

  {
    id: 'promotional-01',
    title: 'Promotional Reel 01',
    category: 'promotional',
    categoryLabel: 'PROMOTIONAL',
    year: 2026,

    thumbnail:
      `${BASE_URL}media/images/thumbnails/Prmotional Reel-01.jpg`,

    video:
      'https://res.cloudinary.com/nbjquwcy/video/upload/v1787933497/Prmotional_Reel-01.mp4',

    description:
      'A brand promo built to hold attention in the first three seconds and beyond.',
  },

  {
    id: 'promotional-02',
    title: 'Promotional Reel 02',
    category: 'promotional',
    categoryLabel: 'PROMOTIONAL',
    year: 2026,

    thumbnail:
      `${BASE_URL}media/images/thumbnails/Prmotional Reel-02.jpg`,

    video:
      'https://res.cloudinary.com/nbjquwcy/video/upload/v1787933492/Prmotional_Reel-02.mp4',

    description:
      'Product-first storytelling with clean, confident pacing.',
  },

  {
    id: 'promotional-03',
    title: 'Promotional Reel 03',
    category: 'promotional',
    categoryLabel: 'PROMOTIONAL',
    year: 2025,

    thumbnail:
      `${BASE_URL}media/images/thumbnails/Prmotional Reel-03.jpg`,

    video:
      'https://res.cloudinary.com/nbjquwcy/video/upload/v1787933552/Prmotional_Reel-03.mp4',

    description:
      'A launch film balancing brand tone with social-first cutting.',
  },

  {
    id: 'promotional-04',
    title: 'Promotional Reel 04',
    category: 'promotional',
    categoryLabel: 'PROMOTIONAL',
    year: 2025,

    thumbnail:
      `${BASE_URL}media/images/thumbnails/Prmotional Reel-04.jpg`,

    video:
      'https://res.cloudinary.com/nbjquwcy/video/upload/v1787933537/Prmotional_Reel-04.mp4',

    description:
      'A short-form promo optimized for vertical, sound-off viewing.',
  },

  {
    id: 'promotional-05',
    title: 'Promotional Reel 05',
    category: 'promotional',
    categoryLabel: 'PROMOTIONAL',
    year: 2024,

    thumbnail:
      `${BASE_URL}media/images/thumbnails/Prmotional Reel-05.jpg`,

    video:
      'https://res.cloudinary.com/nbjquwcy/video/upload/v1787933542/Prmotional_Reel-05.mp4',

    description:
      'A campaign teaser cut for maximum recall in fifteen seconds.',
  },

  {
    id: 'random-01',
    title: 'Random',
    category: 'social',
    categoryLabel: 'SOCIAL',
    year: 2026,

    thumbnail:
      `${BASE_URL}media/images/thumbnails/Random.jpg`,

    video:
      'https://res.cloudinary.com/nbjquwcy/video/upload/v1787933527/Random.mp4',

    description:
      'A social-first edit exploring a looser, more experimental cutting style.',
  },
];

export const SERVICES = [
  {
    index: '01',
    title: 'VIDEO EDITING',
    description:
      'From raw footage to polished final cuts, we shape every frame with intention.',
  },

  {
    index: '02',
    title: 'WEDDING FILMS',
    description:
      'Emotional, cinematic wedding stories cut to preserve every unrepeatable moment.',
  },

  {
    index: '03',
    title: 'AUTOMOTIVE EDITS',
    description:
      'High-energy automotive content built on rhythm, sound design and motion.',
  },

  {
    index: '04',
    title: 'EVENT AFTERMOVIES',
    description:
      'Multi-day, multi-camera events distilled into a single unforgettable recap.',
  },

  {
    index: '05',
    title: 'BRAND PROMOTIONS',
    description:
      'Promotional films that hold attention and carry your brand voice with clarity.',
  },

  {
    index: '06',
    title: 'SOCIAL MEDIA CONTENT',
    description:
      'Fast, sharp, platform-native edits built for the scroll.',
  },
];

export const PROCESS_STEPS = [
  {
    index: '01',
    label: 'RAW FOOTAGE',
  },

  {
    index: '02',
    label: 'STORY',
  },

  {
    index: '03',
    label: 'EDIT',
  },

  {
    index: '04',
    label: 'COLOR',
  },

  {
    index: '05',
    label: 'SOUND',
  },

  {
    index: '06',
    label: 'FINAL FRAME',
  },
];

export const PRINCIPLES = [
  {
    index: '01',
    title: 'PRECISION',
    description:
      'Every cut, transition and beat is placed with deliberate intent — nothing is arbitrary.',
  },

  {
    index: '02',
    title: 'STORYTELLING',
    description:
      'We build structure and pacing so footage becomes a story with a beginning, middle and end.',
  },

  {
    index: '03',
    title: 'CINEMATIC VISUALS',
    description:
      'Color, composition and motion are treated with the same care as a feature film.',
  },

  {
    index: '04',
    title: 'QUALITY',
    description:
      'Every delivery is checked frame by frame before it carries the Prime Quality name.',
  },
];