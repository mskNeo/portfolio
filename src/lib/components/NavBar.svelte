<script lang="ts">
  import { fly } from 'svelte/transition';
  import { afterNavigate } from '$app/navigation';
  import { page } from '$app/state';

  const pages = [
    { name: 'Home', href: '/' },
    { name: 'Sites', href: '/sites' },
    { name: 'Games', href: '/games' },
    { name: 'Stories', href: '/stories' }
  ];

  let toggle = $state(false);

  let currentPage = $state(page.url.pathname);

  afterNavigate(() => {
	toggle = false;
  	currentPage = page.url.pathname;
});

  $effect(() => {
    document.body.style.overflow = toggle ? 'hidden' : '';
  });

  function handleKey(e: KeyboardEvent) {
    if (e.key === 'Escape') toggle = false;
  }
</script>

<svelte:window onkeydown={handleKey} />

<button
  onclick={() => (toggle = true)}
  class="navbar__toggle"
  aria-expanded={toggle}
  aria-controls="main-nav"
  aria-label="Open menu"
>
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
</button>

<nav
  id="main-nav"
  class="navbar"
  class:is-open={toggle}
  aria-label="Main navigation"
>
  {#if toggle}
    <div
      class="navbar__overlay"
      in:fly={{ x: 200, duration: 800 }}
      out:fly={{ x: 200, duration: 800 }}
    >
      <button
        onclick={() => (toggle = false)}
        class="navbar__close"
        aria-label="Close menu"
      >
        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <ul class="navbar__list">
        {#each pages as { name, href }}
          <li><a {href}>{name}</a></li>
        {/each}
      </ul>
    </div>
  {/if}

  <!-- Always visible on desktop -->
  <ul class="navbar__list navbar__list__desktop">
    {#each pages as { name, href }}
      <li><a {href} style:text-decoration={currentPage === href ? 'underline' : ''}>{name}</a></li>
    {/each}
  </ul>
</nav>

<style>
  /* --- Reset buttons --- */
  .navbar__toggle,
  .navbar__close {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    color: inherit;
    font-size: 2rem;
  }

  /* --- Toggle button (hamburger) --- */
  .navbar__toggle {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 5;
  }

  /* --- Nav wrapper --- */
  .navbar {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 10;
    pointer-events: none; /* don't block clicks when closed */
  }

  /* --- Mobile overlay --- */
  .navbar__overlay {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;
    width: 100vw;
    height: 100vh;
    padding: 20px 40px;
    background-color: var(--color-bg);
    pointer-events: all;
  }

  /* --- Close button --- */
  .navbar__close {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
  }

  /* --- Shared list styles --- */
  .navbar__list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 1rem;
  }

  /* --- Mobile list (inside overlay) --- */
  .navbar__overlay .navbar__list {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    width: 100%;
  }

  /* --- Desktop list (always rendered, hidden on mobile) --- */
  .navbar__list__desktop {
    display: none;
  }

  /* --- Links --- */
  .navbar__list li a {
    text-decoration: none;
    color: inherit;
    font-weight: bold;
    font-size: 1.5rem;
  }

  .navbar__list li a:hover {
    text-decoration: underline;
  }

  /* --- Desktop breakpoint --- */
  @media (min-width: 769px) {
    .navbar__toggle {
      display: none;
    }

    .navbar {
      pointer-events: all;
    }

    .navbar__list__desktop {
      display: flex;
      flex-direction: row;
      align-items: center;
	  justify-content: flex-end;
	  gap: 2rem;
	  margin: 1rem 2rem;
    }

    .navbar__overlay {
      display: none;
    }
  }
</style>