// astro.config.mjs or astro.config.ts

sidebar: [
  {
    label: 'About',
    items: [
      { label: 'What is Syrian Coin?', slug: 'about-syrian-coin' }, // <- Add this
    ],
  },
  {
    label: 'Guides',
    items: [
      { label: 'Example Guide', slug: 'guides/example' },
    ],
  },
  {
    label: 'Reference',
    autogenerate: { directory: 'reference' },
  },
]
