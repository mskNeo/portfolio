<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import NavBar from '$lib/components/NavBar.svelte';

	let { children } = $props();

	// If you're using a fallback (i.e. SPA mode) you don't need to prerender all
	// pages by setting this here, but should prerender as many as possible to
	// avoid large performance and SEO impacts
	export const prerender = true;
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
</style>

<NavBar />

{@render children()}
