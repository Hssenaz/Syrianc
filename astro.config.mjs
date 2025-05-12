// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
sidebar: [
  {
    label: 'About',
    items: [
      { label: 'What is Syrian Coin?', slug: 'about-syrian-coin' }
    ]
  },
  {
    label: 'Guides',
    items: [
      { label: 'Example Guide', slug: 'guides/example' },
    ]
  },
  {
    label: 'Reference',
    autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
