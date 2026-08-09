<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '$lib/styles/global.css';
	import { NavBar } from '$lib/components';

	let { children } = $props();

	const breakpoints = {
		sm: '640px',
		md: '768px',
		lg: '1024px',
		xl: '1280px'
	};
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<NavBar />

<main class="container">
	{@render children()}
</main>