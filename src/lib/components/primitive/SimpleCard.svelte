<script lang="ts">
	import { darkMode } from '$lib/store';

	export let src: string;
	export let title: string;
	export let alt: string = title;
	export let imageStyle: string = '';
	export let titleStyle: string = '';
</script>

<article class={$darkMode ? 'dark' : ''}>
	<img data-simple-card {src} {alt} style={imageStyle} />
	<h3 style={titleStyle}>{title}</h3>
</article>

<style>
	article {
		display: flex;
		flex-direction: column;
		width: 220px;
		height: 220px;
		align-items: center;
		justify-content: flex-end;
		gap: 16px;
		position: relative;
		background-color: var(--light-contrast);
		color: var(--black);
		border-radius: 11px;
		border: 1px solid;
		border-color: #000000;
		display: flex;
		overflow: hidden;
		text-align: center;
		padding: 15px 24px 64px 24px;
		cursor: auto;
	}
	article.dark {
		background-color: var(--dark-contrast);
		color: var(--white);
	}
	img[data-simple-card] {
		width: 60px;
		aspect-ratio: 1/1;
		display: inline-flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
	}
	article h3 {
		position: relative;
	}
	article h3::after {
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

	article:hover h3::after {
		transform-origin: center;
		transform: scaleX(1);
		width: 100%;
	}
	article:hover h3 {
		transform: scale(var(--hover-scale));
		transition: 0.3s;
	}
	article:hover img {
		filter: drop-shadow(0 0 10px #dad128);
		transition: 0.3s;
	}
</style>
