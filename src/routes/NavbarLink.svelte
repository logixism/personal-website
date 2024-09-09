<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import { onMount } from 'svelte';

	export let text: string;
	export let href: string;

	let selected = false;

	onMount(() => {
		// trust me, this works
		if (window.location.href.endsWith(href)) {
			selected = true;
		} else {
			selected = false;
		}
	});

	onNavigate(() => {
		if (window.location.href.endsWith(href)) {
			selected = true;
		} else {
			selected = false;
		}
	});
</script>

<a
	class="w-fit h-full p-2 bg-ctp-base outline outline-2 rounded-lg hover:opacity-80 transition {selected ===
	true
		? 'outline-ctp-pink cursor-default'
		: 'outline-ctp-mauve'}"
	{href}
>
	<p class="text-ctp-text font-semibold">{text}</p>
</a>
