<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { darkMode } from '$lib/store';
	import '$lib/styles/global.css';
	import '$lib/styles/responsive.css';
	import { onMount } from 'svelte';

	onMount(() => {
		let isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
		if (isDarkMode) {
			document.body.classList.add('dark');
		}
		darkMode.set(isDarkMode);
	});
</script>

<Navbar />
<slot />
<Footer />
