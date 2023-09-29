<script>
	import Branding from './primitive/Branding.svelte';
	import Facebook from '$lib/assets/misc/socials/facebook.svg';
	import Youtube from '$lib/assets/misc/socials/youtube.svg';
	import LinkedIn from '$lib/assets/misc/socials/linkedIn.svg';
	import Instagram from '$lib/assets/misc/socials/instagram.svg';
	import GitHub from '$lib/assets/misc/socials/github.svg';
	import { darkMode } from '$lib/store';

	export let year = new Date().getFullYear();

	let socials = {
		Facebook: [Facebook, 'https://www.facebook.com'],
		Youtube: [Youtube, 'https://www.youtube.com'],
		LinkedIn: [LinkedIn, 'https://www.linkedin.com'],
		Instagram: [Instagram, 'https://www.instagram.com'],
		Github: [GitHub, 'https://www.github.com']
	};
</script>

<div class={$darkMode ? 'dark' : ''}>
	<footer>
		<section>
			<Branding type="footer" />

			<p>© {year} All Rights Reserved</p>
		</section>
		<section data-right-footer>
			<h1>Duran Enterprise</h1>
			<p>Elevating Education, Empowering Innovators</p>
			<ul>
				{#each Object.entries(socials) as [name, [icon, link]]}
					<li>
						<a href={link}>
							<img src={icon} alt={name} width="24px" height="24px" />
						</a>
					</li>
				{/each}
			</ul>
		</section>
	</footer>
</div>

<style>
	section {
		display: flex;
		flex-direction: column;
		gap: var(--default-gap);
	}
	section[data-right-footer] {
		text-align: right;
	}
	img {
		object-fit: cover;
	}
	footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0 auto;
		width: 100%;
		max-width: var(--footer-and-header-max-width);
		padding: 25px var(--footer-and-header-x-padding);
	}
	div {
		background-color: var(--black);
		color: var(--white);
		height: 50vh;
		display: flex;
	}
	div.dark {
		background-color: var(--white);
		color: var(--black);
	}
	ul {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		list-style: none;
		margin: 0;
		padding: 0;
		gap: var(--navlinks-gap);
	}
	li {
		list-style: none;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
</style>
