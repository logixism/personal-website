<script>
	import Navbar from './Navbar.svelte';
	import NavbarLink from './NavbarLink.svelte';

	import '../app.css';
	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<Navbar>
	<NavbarLink text="home" href="/" />
	<NavbarLink text="projects" href="/projects" />
</Navbar>

<slot />

<style>
	::view-transition-old(root),
	::view-transition-new(root) {
		animation-duration: 10s;
	}
</style>
