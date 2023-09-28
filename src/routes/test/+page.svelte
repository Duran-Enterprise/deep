<script lang="ts">
	import SimpleButton from '$lib/components/primitive/SimpleButton.svelte';
	function handleButtonClick() {
		console.log('yep');
	}
</script>

<div>
	<SimpleButton onclick={handleButtonClick} text="Primary" />
	<SimpleButton onclick={handleButtonClick} elementType="secondary" text="Secondary" />
	<SimpleButton onclick={handleButtonClick} elementType="secondary" text="Secondary" mode="dark" />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}
</style>
