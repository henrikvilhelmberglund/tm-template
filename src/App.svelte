<script lang="ts">
	import gmFetch from "@sec-ant/gm-fetch";
	let url = "";

	async function doStuff() {
		const followButton = document.querySelectorAll("a[role=tab]")[1] as HTMLAnchorElement;
		console.log(followButton);
    followButton.click();

		// const response = await gmFetch(link.href);
		// const html = await response.text();
		// const parser = new DOMParser();
		// const doc = parser.parseFromString(html, "text/html");
	}

	setTimeout(() => {
		doStuff();
	}, 2000);
</script>

<div class="bg-green-500 size-48 absolute top-0 left-0">HELLO</div>

<style>
</style>
