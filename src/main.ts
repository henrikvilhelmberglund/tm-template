import { mount } from "svelte";
import "./app.css";
import App from "./App.svelte";
import "uno.css";

const app = mount(App, {
	target: (() => {
		if (!document.querySelector("#app")) {
			const app = document.createElement("div");
			document.body.append(app);
			return app;
		} else {
			return document.querySelector("#app");
		}
	})()
});

export default app;
