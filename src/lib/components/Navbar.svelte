<script>
	import DarkModeToggle from './primitive/DarkModeToggle.svelte';
	import Branding from './primitive/Branding.svelte';
</script>

<nav class="navbar">
	<Branding />

	<ul class="div">
		<DarkModeToggle />
		<li><a href="#">Home</a></li>
		<li><a href="#">Courses</a></li>
		<li><a href="#">Projects</a></li>
		<li><a href="#">Login</a></li>
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
	li {
		list-style: none;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
</style>
