<script lang="ts">
	import sun from '$lib/assets/misc/sun.png';
	import moon from '$lib/assets/misc/moon.png';

	import { darkMode } from '$lib/store';

	function handleToggle() {
		darkMode.update((isDarkMode) => !isDarkMode);
		$darkMode ? document.body.classList.add('dark') : document.body.classList.remove('dark');
	}
</script>

<button on:click={handleToggle}>
	<img src={$darkMode ? moon : sun} alt="Dark Mode Toggle" />
</button>

<style>
	button {
		all: unset;
		cursor: pointer;
		overflow: hidden;
	}
</style>
