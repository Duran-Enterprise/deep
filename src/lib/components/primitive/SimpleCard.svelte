<script lang="ts">
	import { darkMode } from '$lib/store';

	export let src: string;
	export let title: string;
	export let alt: string = title;
	export let imageStyle: string = '';
	export let titleStyle: string = '';
	export let description: string | undefined = undefined;
</script>

<article class={$darkMode ? 'dark' : ''}>
	<section>
		<img data-simple-card {src} {alt} style={imageStyle} />
		<h3 style={titleStyle}>{title}</h3>
	</section>
	{#if description}
		<p>{description}</p>
	{/if}
</article>

<style>
	article {
		width: 220px;
		display: flex;
		flex-direction: column;
		gap: var(--default-gap);
	}
	section {
		display: flex;
		flex-direction: column;
		height: 220px;
		align-items: center;
		justify-content: flex-end;
		gap: var(--default-gap);
		position: relative;
		background-color: var(--light-contrast);
		color: var(--text_black);
		border-radius: 11px;
		border: 1px solid;
		border-color: #000000;
		display: flex;
		overflow: hidden;
		text-align: center;
		padding: 15px 24px 64px 24px;
		cursor: auto;
		transition: var(--bg-and-color-transition);
	}
	article.dark > section {
		background-color: var(--dark-contrast);
		color: var(--text_white);
	}
	img[data-simple-card] {
		width: 60px;
		aspect-ratio: 1/1;
		display: inline-flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
	}
	section h3 {
		position: relative;
	}
	section h3::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0%;
		transform: scaleX(0);
		width: 0;
		height: 2px;
		background-color: #dad128;
		transition: transform 0.3s;
	}

	section:hover h3::after {
		transform-origin: center;
		transform: scaleX(1);
		width: 100%;
	}
	section:hover h3 {
		transform: scale(var(--hover-scale));
		transition: 0.3s;
	}
	section:hover img {
		filter: drop-shadow(0 0 10px #dad128);
		transition: 0.3s;
	}
	p {
		text-align: center;
	}
</style>
