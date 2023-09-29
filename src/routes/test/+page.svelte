<script lang="ts">
	import SimpleButton from '$lib/components/primitive/SimpleButton.svelte';
	import SimpleCard from '$lib/components/primitive/SimpleCard.svelte';
	import Modularized from '$lib/assets/misc/cards/modularized.svg';
	import ProjectBased from '$lib/assets/misc/cards/project-based.svg';
	import IndustryRelevant from '$lib/assets/misc/cards/industry-relevant.svg';
	function handleButtonClick() {
		console.log('yep');
	}
</script>

<h1>Test Buttons</h1>
<section>
	<SimpleButton onclick={handleButtonClick} text="Primary" />
	<SimpleButton onclick={handleButtonClick} elementType="secondary" text="Secondary" />
	<SimpleButton onclick={handleButtonClick} elementType="secondary" text="Secondary" mode="dark" />
</section>
<h1>Test Simple Cards</h1>
<section>
	<ul>
		<li>
			<SimpleCard
				src={Modularized}
				alt="Modularized"
				title="Modularized"
				description="Learn in modules for flexibility."
			/>
		</li>
		<li>
			<SimpleCard
				src={ProjectBased}
				alt="Project Based"
				title="Project Based"
				description="Hands-on coding with projects."
			/>
		</li>
		<li>
			<SimpleCard
				src={IndustryRelevant}
				title="Industry Relevant"
				description="Skills for tech careers."
			/>
		</li>
	</ul>
</section>

<style>
	h1 {
		text-align: center;
	}
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 2rem;
	}
	ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 32px;
	}
	li {
		list-style: none;
	}
</style>
