<script lang="ts">
	import sun from '$lib/assets/misc/sun.png';
	import moon from '$lib/assets/misc/moon.png';

	import { onMount } from 'svelte';
	import { darkMode } from '$lib/store';

	let isDarkMode = false;

	onMount(() => {
		isDarkMode = document.body.classList.contains('dark');
	});

	function handleToggle() {
		isDarkMode = !isDarkMode;
		isDarkMode ? document.body.classList.remove('dark') : document.body.classList.add('dark');
		darkMode.set(isDarkMode);
	}
</script>

<button on:click={handleToggle}>
	<img src={isDarkMode ? sun : moon} alt="Dark Mode Toggle" />
</button>

<style>
	button {
		all: unset;
		cursor: pointer;
		overflow: hidden;
	}
</style>
