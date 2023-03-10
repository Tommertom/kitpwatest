import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit'
const pwaManifest = {
	name: "Ionic SSR demo",
	short_name: "IonicSSRDemo",
	description: "Ionic SSR demo",
	theme_color: '#f27649',
	orientation: "portrait",
	icons: [
		{
			"src": "/android-chrome-192x192.png",
			"sizes": "192x192",
			"type": "image/png",
			"purpose": "maskable any"
		}
	]
}

const pwaConfiguration = {
	// includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png', 'dist/*'],
	// base: '/',
	// scope: '/',
	manifest: pwaManifest
}
const config: UserConfig = {
	plugins: [sveltekit(), SvelteKitPWA(pwaConfiguration)]
};

export default config;
