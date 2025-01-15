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
	class="w-fit h-full p-2 px-4 bg-neutral-900/20 outline outline-1 rounded-md hover:opacity-80 transition {selected ===
	true
		? 'outline-neutral-200 cursor-default'
		: 'outline-neutral-400'}"
	{href}
>
	<p class="text-neutral-300 font-semibold">{text}</p>
</a>
