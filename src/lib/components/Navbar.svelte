<script>
	import DarkModeToggle from './primitive/DarkModeToggle.svelte';
	import Branding from './primitive/Branding.svelte';
</script>

<nav>
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
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 62px;
		max-width: 1080px;
		margin: 0 auto;
		padding: 0 32px;
	}
	ul {
		display: flex;
		align-items: center;
		justify-content: space-between;
		list-style: none;
		margin: 0;
		padding: 0;
		gap: 32px;
	}
	li {
		list-style: none;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
</style>
