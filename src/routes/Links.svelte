<script>
	import { clickToCopy } from '$lib/click-copy';
	import Icon from './Icon.svelte';

	/**
	 * @type {any[]}
	 */
	export let links = [];
</script>

<div class="flex justify-around space-x-4">
	{#each links as link}
		{#if link.copytext}
			<button
				use:clickToCopy={link.text}
				type="button"
				class="flex outline outline-1 outline-neutral-500/10 hover:outline-neutral-500/30 hover:bg-neutral-900/60 transition-all items-center justify-center bg-neutral-900/20 rounded-xl h-16 flex-grow cursor-pointer"
			>
				<svelte:component this={Icon} name={link.icon} style="font-size: 2em; color: #B9B9B9;" />
			</button>
		{:else}
			<a
				target="_blank"
				href={link.href}
				class="flex outline outline-1 outline-neutral-500/10 hover:outline-neutral-500/30 hover:bg-neutral-900/60 transition-all items-center justify-center bg-neutral-900/20 rounded-xl h-16 flex-grow cursor-pointer"
			>
				<svelte:component this={Icon} name={link.icon} style="font-size: 2em; color: #B9B9B9;" />
			</a>
		{/if}
	{/each}
</div>
