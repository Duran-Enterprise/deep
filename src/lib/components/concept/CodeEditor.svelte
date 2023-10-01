<script lang="ts">
	import { writable } from 'svelte/store';
	import CodeMirror from 'svelte-codemirror-editor';
	import { html } from '@codemirror/lang-html';
	import { oneDark } from '@codemirror/theme-one-dark';
	import beautify from 'js-beautify';

	export let htmlString: string;

	function formatHtmlString() {
		try {
			htmlString = beautify.html(htmlString);
		} catch (error) {
			console.error('Error formatting HTML:', error);
		}
	}
	let fontSize = writable(16);

	let styles = {
		zIndex: '1',
		width: '100%',
		maxWidth: '100%',
		height: 'calc((100vh - 100px)*0.5)',
		margin: '0 auto',
		display: 'block',
		padding: '20px 20px 0 20px',
		borderRadius: '25px 25px 0 0',
		overflow: 'auto'
	};

	function increaseFontSize() {
		fontSize.update((size) => size + 1);
	}

	function decreaseFontSize() {
		fontSize.update((size) => size - 1);
	}
</script>

<section>
	<CodeMirror
		bind:value={htmlString}
		theme={oneDark}
		lang={html()}
		styles={{
			'&': {
				...styles,
				fontSize: `${$fontSize}px`
			}
		}}
		useTab={true}
		lineWrapping={true}
	/>
	<ul data-controls>
		<li data-font-size>
			<button class="hover-effect" on:click={decreaseFontSize}> - </button>
			Font Size ({$fontSize})
			<button class="hover-effect" on:click={increaseFontSize}> + </button>
		</li>
		<li><button class="hover-effect" on:click={formatHtmlString}>Format</button></li>
	</ul>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		gap: 0;
		margin: 20px;
		height: fit-content;
	}

	ul[data-controls] {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
		margin-bottom: 10px;
		padding: 8px;
		background-color: rgb(40, 44, 52);
		border-radius: 0 0 25px 25px;
		color: var(--text_white);
	}
	ul[data-controls]::before {
		content: '';
		position: absolute;
		top: 0;
		display: block;
		margin: 0 auto;
		width: 100%;
		height: 1px;
		background-color: #dad128;
	}
	li {
		width: 190px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	li[data-font-size] {
		flex-wrap: nowrap;
	}
	button {
		all: unset;
		position: relative;
		background-color: transparent;
		border-radius: 5px;
		padding: 5px 10px;
		margin: 0 5px;
		cursor: pointer;
	}
	/* 
	button::after {
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

	button:hover::after {
		transform-origin: center;
		transform: scaleX(1);
		width: 100%;
	}
	button:hover {
		color: #dad128;
		transform: scale(var(--hover-scale));
		transition: 0.3s;
	} */
</style>
