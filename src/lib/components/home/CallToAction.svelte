<script lang="ts">
	import Typewriter from '$lib/utils/Typewriter';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	let h1Element: Element;
	$: inScreen = false;
	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					typingAnimation();
				} else {
					untypingAnimation();
				}
			});
		});

		observer.observe(h1Element);

		return () => {
			observer.unobserve(h1Element);
		};
	});

	function typingAnimation() {
		console.log('yep');
		inScreen = true;
	}

	function untypingAnimation() {
		inScreen = false;
	}
</script>

<section class="call-to-action">
	<div bind:this={h1Element} data-trigger>
		{#if inScreen}
			<h1
				in:Typewriter={{}}
				out:fade={{ duration: 500 }}
				aria-label="Start your coding journey now!"
			>
				Start your coding journey
				<span>now</span>!
			</h1>
		{/if}
	</div>
	<ul>
		<li><a href="/">HTML</a></li>
		<li>❖</li>
		<li><a href="/">CSS</a></li>
		<li>❖</li>
		<li><a href="/">Javascript</a></li>
		<li>❖</li>
		<li><a href="/">Python</a></li>
	</ul>
</section>

<style>
	div[data-trigger] {
		padding: 0;
	}
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: var(--large-whitespace) auto;
		padding: var(--large-whitespace) auto;
		max-width: var(--max-width);
		text-align: center;
		min-height: 80vh;
	}
	h1 {
		text-align: center;
		font-size: var(--large-font-size);
		margin: var(--medium-whitespace);
	}
	span {
		color: var(--accent);
		text-decoration: underline;
	}
	ul {
		display: flex;
		align-items: center;
		justify-content: center;
		list-style: none;
		margin: 0;
		padding: 0;
		gap: var(--navlinks-gap);
		margin-bottom: var(--large-whitespace);
	}
	a {
		text-decoration: none;
		color: inherit;
	}
</style>
