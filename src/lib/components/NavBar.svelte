<script lang="ts">
    const pages = [
		{ name: 'Home', href: '/' },
		{ name: 'Sites', href: '/sites' },
		{ name: 'Games', href: '/games' },
		{ name: 'Stories', href: '/stories' }
	];
</script>


<style>
	.navbar {
		display: flex;
		justify-content: flex-end;
	}

	.navbar__list {
		list-style: none;
		display: flex;
		gap: 1rem;
		margin: 0 20px 0 0;
		padding: 0;
	}

	.navbar__list li a {
		text-decoration: none;
		color: inherit;
		font-weight: bold;
		font-size: 1.2rem;
	}

	.navbar__list li a:hover {
		text-decoration: underline;
	}
</style>

<nav class="navbar" aria-label="Main navigation">
	<ul class="navbar__list">
		{#each pages as { name, href }}
		<li>
			<a href={href}>{name}</a>
		</li>
		{/each}
	</ul>
</nav>
