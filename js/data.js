const HERO_IMAGES = [
  'assets/images/hero/hero-1.jpg',
  'assets/images/hero/hero-2.jpg',
  'assets/images/hero/hero-3.jpg',
  'assets/images/hero/hero-4.jpg',
  'assets/images/hero/hero-5.jpg',
  'assets/images/hero/hero-6.jpg',
];

const PLACEHOLDER = 'assets/images/placeholder.svg';

const SEASONS = [
  {
    key: 'spring',
    label: 'Spring',
    months: 'April – June',
    note: 'Snowmelt, apricot blossoms across the valley, and the high passes just opening up again.',
    img: 'assets/images/seasons/spring.jpg',
  },
  {
    key: 'summer',
    label: 'Summer',
    months: 'July – August',
    note: "The warmest window. Every road is open, valleys turn green, and it's the easiest time to move around.",
    img: 'assets/images/seasons/summer.jpg',
  },
  {
    key: 'autumn',
    label: 'Autumn',
    months: 'September – October',
    note: 'Poplars turn gold, the air clears, and the light is the best it gets all year. My favorite stretch.',
    img: 'assets/images/seasons/autumn.jpg',
  },
  {
    key: 'winter',
    label: 'Winter',
    months: 'November – March',
    note: 'Frozen rivers, deep quiet, and a Ladakh almost no outsider ever sees. Not easy, but unforgettable.',
    img: 'assets/images/seasons/winter.jpg',
  },
];

const ROUTES = [
  {
    slug: 'khardung-la',
    name: 'Khardung La',
    note: 'One of the highest motorable roads anywhere. Thin air, ridiculous views, and I still feel it every time.',
    thumbs: ['1', '2', '3', '4'].map((n) => `assets/images/routes/khardung-la-${n}.jpg`),
  },
  {
    slug: 'nubra-valley',
    name: 'Nubra Valley',
    note: 'Sand dunes above 10,000 feet, double-humped camels, and villages that feel like they wandered in from somewhere else.',
    thumbs: ['1', '2', '3', '4'].map((n) => `assets/images/routes/nubra-valley-${n}.jpg`),
  },
  {
    slug: 'pangong-lake',
    name: 'Pangong Lake',
    note: "The color changes with the light — I've watched it go through five different blues in one afternoon.",
    thumbs: ['1', '2', '3', '4'].map((n) => `assets/images/routes/pangong-lake-${n}.jpg`),
  },
  {
    slug: 'turtuk',
    name: 'Turtuk',
    note: 'The last village before the old border. Apricot orchards and a slower kind of quiet.',
    thumbs: ['1', '2', '3', '4'].map((n) => `assets/images/routes/turtuk-${n}.jpg`),
  },
  {
    slug: 'thiksey-monastery',
    name: 'Thiksey Monastery',
    note: 'Best before the sunrise crowds arrive. Sit on the roof, let the valley wake up around you.',
    thumbs: ['1', '2', '3', '4'].map((n) => `assets/images/routes/thiksey-monastery-${n}.jpg`),
  },
  {
    slug: 'alchi-monastery',
    name: 'Alchi Monastery',
    note: 'Some of the oldest paintings in Ladakh, tucked in a village most people drive straight past.',
    thumbs: ['1', '2', '3', '4'].map((n) => `assets/images/routes/alchi-monastery-${n}.jpg`),
  },
  {
    slug: 'wari-la',
    name: 'Wari La',
    note: 'Fewer jeeps, rougher road, better silence. I take people here when they want something wilder.',
    thumbs: ['1', '2', '3', '4'].map((n) => `assets/images/routes/wari-la-${n}.jpg`),
  },
];

const GALLERY = [
  { label: 'Nubra Valley — sand dunes', ratio: '4/5', rotate: -3, src: 'assets/images/gallery/nubra-valley.jpg' },
  { label: 'Tashi with guests, Pangong Lake', ratio: '1/1', rotate: 2, src: 'assets/images/gallery/pangong-guests.jpg' },
  { label: 'Thiksey Monastery, early morning', ratio: '3/4', rotate: -1, src: 'assets/images/gallery/thiksey-morning.jpg' },
  { label: 'Trail snack stop, Wari La', ratio: '1/1', rotate: 3, src: 'assets/images/gallery/wari-la-trail.jpg' },
  { label: 'Turtuk orchards', ratio: '4/5', rotate: -2, src: 'assets/images/gallery/turtuk-orchards.jpg' },
  { label: 'Group photo, Khardung La', ratio: '3/4', rotate: 1, src: 'assets/images/gallery/khardung-group.jpg' },
  { label: 'Prayer flags, Alchi', ratio: '1/1', rotate: -3, src: 'assets/images/gallery/alchi-flags.jpg' },
];

const TESTIMONIALS = [
  {
    quote: "Tashi didn't just guide us, he explained everything — why the flags are there, why villages sit where they do. We asked for a lake and left with a lot more.",
    name: 'Marta, Portugal',
    rotate: -2,
  },
  {
    quote: 'We told him roughly what we wanted and he built the whole route around it. Best travel decision we made in India.',
    name: 'Daniel & Priya, Singapore',
    rotate: 1,
  },
  {
    quote: 'Steady on the passes, funny at camp, and he knows literally everyone in every village we passed through.',
    name: 'Soo-min, South Korea',
    rotate: -1,
  },
];

const PRODUCE_ITEMS = [
  'Herbal teas',
  'Dried apricots',
  'Wild herbs & spices',
  'Marmalades',
  'Stone-ground flours',
];
