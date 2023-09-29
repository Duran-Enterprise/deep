<script lang="ts">
	import SimpleButton from '../primitive/SimpleButton.svelte';
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
		<img src="src/lib/assets/owls/blue-baby-owl.png" alt="Blue baby owl" width="100%" />
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
		/* display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap; */
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
		font-size: var(--large-font-size);
		line-height: 110%;
	}
</style>
