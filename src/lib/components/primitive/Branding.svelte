<script lang="ts">
	import lightBranding from '$lib/assets/misc/light-branding.png';
	import darkBranding from '$lib/assets/misc/dark-branding.png';
	import { darkMode } from '$lib/store';
</script>

<img src={$darkMode ? darkBranding : lightBranding} alt="Dark Mode Toggle" />
