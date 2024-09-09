// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import tailwind from '@astrojs/tailwind'
import liveCode from 'astro-live-code'
import starlightThemeRapidePlugin from 'starlight-theme-rapide'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'euxzyHooks',
			social: {
				github: 'https://github.com/euxzy/hooks-docs',
				discord: 'https://discordapp.com/users/717738246490030200',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [{ label: 'Installation', slug: 'installation' }],
				},
				{
					label: 'React Hooks',
					autogenerate: { directory: 'hooks/react' },
				},
			],
			customCss: ['./src/tailwind.css'],
			plugins: [starlightThemeRapidePlugin()],
		}),
		tailwind({ applyBaseStyles: false }),
		liveCode()
	],
})
