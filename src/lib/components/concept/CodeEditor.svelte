<script lang="ts">
	import CodeMirror from 'svelte-codemirror-editor';
	import { html } from '@codemirror/lang-html';
	import { javascript } from '@codemirror/lang-javascript';
	import { css } from '@codemirror/lang-css';
	import { oneDark } from '@codemirror/theme-one-dark';
	import beautify from 'js-beautify';
	import { codeEditorFontSize } from '$lib/store';
	export let language: 'html' | 'js' | 'css';
	export let rawString: string;
	/* eslint-disable  @typescript-eslint/no-explicit-any */
	let lang: any;

	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let divElement: HTMLDivElement;
	let showModal = false;
	onMount(() => {
		function preventCopyAndPaste(element: HTMLElement) {
			function show() {
				showModal = true;
				setTimeout(() => {
					showModal = false;
				}, 2000);
			}

			element.addEventListener('copy', (e: ClipboardEvent) => {
				e.preventDefault();
				show();
			});
			element.addEventListener('cut', (e: ClipboardEvent) => {
				showModal = true;
				e.preventDefault();
				show();
			});

			element.addEventListener('paste', (e: ClipboardEvent) => {
				showModal = true;
				e.preventDefault();
				show();
			});

			Array.from(element.children).forEach((child) => {
				if (child instanceof HTMLElement) {
					preventCopyAndPaste(child);
				}
			});
		}
		if (divElement) {
			preventCopyAndPaste(divElement);
		}
	});

	$: switch (language) {
		case 'html':
			lang = html;
			break;
		case 'js':
			lang = javascript;
			break;
		case 'css':
			lang = css;
			break;
	}
	function formatHtmlString() {
		try {
			switch (language) {
				case 'html':
					rawString = beautify.html(rawString);
					break;
				case 'js':
					rawString = beautify.js(rawString);
					break;
				case 'css':
					rawString = beautify.css(rawString);
					break;
			}
		} catch (error) {
			console.error('Error formatting HTML:', error);
		}
	}

	let styles = {
		zIndex: '1',
		width: '100%',
		maxWidth: '100%',
		height: 'calc((100vh - 100px)*0.5)',
		margin: '0 auto',
		display: 'block',
		padding: '10px 20px 0 20px',
		borderRadius: '0',
		overflow: 'auto',
		userSelect: 'none'
	};

	function increaseFontSize() {
		codeEditorFontSize.update((size) => size + 1);
	}

	function decreaseFontSize() {
		codeEditorFontSize.update((size) => size - 1);
	}
</script>

<section>
	<div bind:this={divElement}>
		{#if showModal}
			<div class="modal" transition:fly={{ x: 200, duration: 500 }}>
				Copy, Cut, and Paste are not allowed in this section.
			</div>
		{/if}
		<CodeMirror
			bind:value={rawString}
			theme={oneDark}
			lang={lang()}
			styles={{
				'&': {
					...styles,
					fontSize: `${$codeEditorFontSize}px`
				}
			}}
			useTab={true}
			lineWrapping={true}
		/>
	</div>

	<ul data-controls>
		<li data-font-size>
			<button class="hover-effect" on:click={decreaseFontSize}> - </button>
			Font Size ({$codeEditorFontSize})
			<button class="hover-effect" on:click={increaseFontSize}> + </button>
		</li>
		<li><button class="hover-effect" on:click={formatHtmlString}>Format</button></li>
	</ul>
</section>

<style>
	.modal {
		position: absolute;
		top: -100;
		left: 0;
		width: 100%;
		background-color: #ff0000;
		color: #fff;
		padding: 10px;
		text-align: center;
		z-index: 0999999999999999999;
	}
	div {
		position: relative;
	}
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
</style>
