<script lang="ts">
	import CodeEditor from '$lib/components/concept/CodeEditor.svelte';
	let htmlString: string = `<style>
	h1 {
		color: #1474ac;
		text-align: center;
	}

</style>

<h1>The DEEP Project</h1>`;
</script>

<main>
	<section>
		<iframe
			srcdoc={`<style>
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
			}</style>` + htmlString}
			title="DEEP Project web container"
			frameborder="0"
			width="100%"
			height="100%"
		/>
	</section>
	<CodeEditor bind:htmlString />
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
</style>
