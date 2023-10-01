<script>
	import DarkModeToggle from './primitive/DarkModeToggle.svelte';
	import Branding from './primitive/Branding.svelte';
</script>

<nav class="navbar">
	<a href="/"> <Branding /></a>

	<ul class="div">
		<li><DarkModeToggle /></li>
		<li class="hover-effect"><a href="/">Home</a></li>
		<li class="hover-effect"><a href="/">Courses</a></li>
		<li class="hover-effect"><a href="/">Projects</a></li>
		<li class="hover-effect">
			<a href="/concept">Check concept</a>
		</li>
	</ul>
</nav>

<style>
	nav {
		position: sticky;
		top: 0;
		left: 0;
		z-index: 2;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 62px;
		margin: 0 auto;
		max-width: var(--footer-and-header-max-width);
		padding: 0 var(--footer-and-header-x-padding);
	}
	ul {
		display: flex;
		align-items: center;
		justify-content: space-between;
		list-style: none;
		margin: 0;
		padding: 0;
		gap: var(--navlinks-gap);
	}
	a {
		text-decoration: none;
		color: inherit;
	}
	li:first-child {
		padding-top: 4px;
	}
</style>
