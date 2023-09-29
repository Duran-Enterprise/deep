<script lang="ts">
	import lightBranding from '$lib/assets/misc/light-branding.png';
	import darkBranding from '$lib/assets/misc/dark-branding.png';
	import { darkMode } from '$lib/store';

	export let type: 'footer' | 'header' = 'header';

	$: imgSrc =
		type === 'footer'
			? $darkMode
				? lightBranding
				: darkBranding
			: $darkMode
			? darkBranding
			: lightBranding;
</script>

<img src={imgSrc} alt="Dark Mode Toggle" />
