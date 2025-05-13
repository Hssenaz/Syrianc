// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Syrian Coin',
			customCss: 'src/styles/custom.css',
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/withastro/starlight',
				},
			],
			sidebar: [
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
