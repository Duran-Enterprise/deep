<script lang="ts">
	import SimpleCard from '../primitive/SimpleCard.svelte';

	let courses = [
		{
			title: 'Modularized',
			description: 'Learn in modules for flexibility.',
			image: 'src/lib/assets/misc/cards/modularized.svg'
		},
		{
			title: 'Project Based',
			description: 'Hands-on coding with projects.',
			image: 'src/lib/assets/misc/cards/project-based.svg'
		},
		{
			title: 'Industry Relevant',
			description: 'Skills for tech careers.',
			image: 'src/lib/assets/misc/cards/industry-relevant.svg'
		}
	];
</script>

<div>
	<main class="course-banner">
		<h1>The D.E.E.P. Project</h1>
		<p>
			D.E.E.P. stands for Dedication, Empowerment, Education, and Programming — the foundation of
			our mission to provide accessible, project-based learning for all aspiring programmers.
		</p>
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
