<script lang="ts">
	import SimpleButton from '../primitive/SimpleButton.svelte';
	import Owl from '$lib/assets/owls/blue-baby-owl.png';
	function handleButtonClick() {
		console.log('clicked');
	}
</script>

<header>
	<section data-hero-content>
		<h1>Discover the Depths of Knowledge</h1>
		<p>Dive into a World of Education, Empowerment, and Programming Excellence.</p>
		<div>
			<SimpleButton text="Get Started" onclick={handleButtonClick} />
			<SimpleButton elementType="secondary" text="Learn More" onclick={handleButtonClick} />
		</div>
	</section>

	<section class="hero-banner">
		<img src={Owl} alt="Blue baby owl" width="100%" />
	</section>
</header>

<style>
	header {
		max-width: var(--max-width);
		margin: var(--large-whitespace) auto;
		padding: 0 var(--footer-and-header-x-padding);
		height: fit-content;
		padding-bottom: var(--large-whitespace);
		text-wrap: balance;
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
	}
	section[data-hero-content] {
		display: flex;
		flex-direction: column;
		gap: var(--default-gap);
	}
	div {
		display: flex;
		gap: var(--default-gap);
		flex-wrap: wrap;
	}
	h1 {
		/* color: var(--primary); */
		color: #2d85b4;
		font-size: var(--large-font-size);
		line-height: 110%;
	}
</style>
