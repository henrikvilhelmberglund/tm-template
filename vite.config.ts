// @ts-nocheck
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import monkey from "vite-plugin-monkey";
import UnoCSS from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svelte(),
		UnoCSS(),
		monkey({
			entry: "src/main.ts",
			server: {
				prefix: false,
				closePreviewAutomatically: true
			},
			userscript: {
				icon: "https://vitejs.dev/logo.svg",
				namespace: "npm/vite-plugin-monkey",
				match: ["https://x.com/home"],
				grant: "GM_xmlhttpRequest"
				// connect: ["connectdomainshere.com"],
			}
		})
	]
});
