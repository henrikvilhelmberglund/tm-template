// @ts-nocheck
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import monkey from "vite-plugin-monkey";
import UnoCSS from "unocss/vite";
import { metadata } from "./metadata.ts"

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
				...metadata
			}
		})
	]
});
