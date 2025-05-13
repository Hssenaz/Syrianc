import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Syrian Coin',
      customCss: ['./src/css/custom.css'],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/withastro/starlight',
        },
      ],
      sidebar: [
        {
          label: 'Buy SYR',
          link: '/how-to-buy-syr',
        },
        {
          label: 'About',
          items: [
            { label: 'What is Syrian Coin?', slug: 'about-syrian-coin' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
});
