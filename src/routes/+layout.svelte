<script lang="ts">
	import { darkMode } from '$lib/store';
	import '$lib/styles/global.css';
	import { onMount } from 'svelte';

	onMount(() => {
		let isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
		if (isDarkMode) {
			document.body.classList.add('dark');
		}
		darkMode.set(isDarkMode);
	});
</script>

<slot />
