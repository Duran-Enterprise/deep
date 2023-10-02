<script lang="ts">
	import CodeEditor from '$lib/components/concept/CodeEditor.svelte';

	let rawHTMLString = `<h1>The DEEP Project</h1>`;
	let rawCssString = `h1 {
	color: #1474ac;
	text-align: center;
}`;
	let rawJavascriptString = ``;
	$: rawHTML = `<!DOCTYPE html>
<html lang="en">

	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>The DEEP Project</title>
		<style>
				::-webkit-scrollbar {
					background: transparent;
					width: 12px;
				}
				
				::-webkit-scrollbar-thumb {
					background: #18191a;
					border-radius: 6px;
				}
				
				::-webkit-scrollbar-thumb:hover {
					background: #1474ac;
				}
			${rawCssString}	
		</style>
		
	</head>
	<body>
		${rawHTMLString}
		
		<script> ${rawJavascriptString} </script >	
	</body>
</html>`;

	export let activeTabValue = 1;
	let code = rawHTMLString;
	let language: 'html' | 'js' | 'css' = 'html';
	function handleClick(tabValue: number) {
		activeTabValue = tabValue;
		switch (tabValue) {
			case 1:
				code = rawHTMLString;
				language = 'html' as const;
				break;
			case 2:
				code = rawCssString;
				language = 'css' as const;
				break;
			case 3:
				code = rawJavascriptString;
				language = 'js' as const;
				break;
		}
		return activeTabValue;
	}
	$: {
		setTimeout(() => {
			if (language === 'html') {
				rawHTMLString = code;
			} else if (language === 'css') {
				rawCssString = code;
			} else {
				rawJavascriptString = code;
			}
		}, 300);
	}
</script>

<main>
	<section>
		<iframe
			srcdoc={rawHTML}
			title="DEEP Project web container"
			frameborder="0"
			width="100%"
			height="100%"
		/>
	</section>
	<div>
		<ul>
			<li class={activeTabValue === 1 ? 'active' : ''}>
				<button class="hover-effect" on:click={() => handleClick(1)}> HTML</button>
			</li>
			<li class={activeTabValue === 2 ? 'active' : ''}>
				<button class="hover-effect" on:click={() => handleClick(2)}> CSS</button>
			</li>
			<li class={activeTabValue === 3 ? 'active' : ''}>
				<button class="hover-effect" on:click={() => handleClick(3)}> Javascript</button>
			</li>
		</ul>
		<CodeEditor bind:rawString={code} bind:language />
	</div>
</main>

<style>
	main {
		max-width: var(--max-width);
		padding: 0 var(--small-whitespace);
		height: 100vh;
		display: grid;
		grid-template-rows: calc(50%-20px) 50%;
		grid-template-columns: 100%;
		margin: 0 auto;
	}
	section {
		max-width: var(--max-width);
		padding: 20px;
		margin: 0 20px;
		border-radius: 25px;
		background-color: #ffffff;
	}
	div {
		padding: 0;
	}
	ul {
		display: flex;
		justify-content: center;
		align-items: center;
		transform: translateY(19px);
		margin: 0 auto;
		width: calc(100% - 40px);
		flex-wrap: wrap;
		list-style: none;
		background-color: rgb(40, 44, 52);
		border-radius: 25px 25px 0 0;
		border-bottom: 1px solid #dad128;
	}
	li {
		padding: 5px;
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

	li.active > button {
		color: #dad128;
		font-weight: bold;
	}
</style>
