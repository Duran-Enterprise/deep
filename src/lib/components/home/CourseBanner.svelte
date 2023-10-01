<script lang="ts">
	import SimpleCard from '../primitive/SimpleCard.svelte';
	import Modularized from '$lib/assets/misc/cards/modularized.svg';
	import ProjectBased from '$lib/assets/misc/cards/project-based.svg';
	import IndustryRelevant from '$lib/assets/misc/cards/industry-relevant.svg';
	let courses = [
		{
			title: 'Modularized',
			description: 'Learn in modules for flexibility.',
			image: Modularized
		},
		{
			title: 'Project Based',
			description: 'Hands-on coding with projects.',
			image: ProjectBased
		},
		{
			title: 'Industry Relevant',
			description: 'Skills for tech careers.',
			image: IndustryRelevant
		}
	];
</script>

<div>
	<main class="course-banner">
		<h1>The D.E.E.P. Project</h1>
		<div>
			<p>
				D.E.E.P. stands for Dedication, Empowerment, Education, and Programming — the foundation of
				our mission to provide accessible, project-based learning for all aspiring programmers.
			</p>
		</div>
		<ul>
			{#each Object.values(courses) as course}
				<li>
					<SimpleCard src={course.image} title={course.title} description={course.description} />
				</li>
			{/each}
		</ul>
	</main>
</div>

<style>
	h1 {
		margin-bottom: var(--small-whitespace);
		font-size: var(--large-font-size);
		font-style: italic;
	}
	div:has(> p) {
		margin: 0 auto;
		max-width: 50ch;
	}
	p {
		text-wrap: balance;
		margin-bottom: var(--large-whitespace);
	}
	ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: var(--navlinks-gap);
	}
	main {
		margin: var(--large-whitespace);
		text-align: center;
		max-width: var(--max-width);
	}
	div {
		display: flex;
		justify-content: center;
	}
</style>
