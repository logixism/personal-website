<script>
	export let blog = false;

	import Module from './Module.svelte';
	import BlogModule from './blog/BlogModule.svelte';
</script>

{#if blog}
	<svelte:component this={BlogModule} cls="mb-4 flex flex-row space-x-4">
		<slot />
	</svelte:component>
{:else}
	<svelte:component this={Module} cls="mb-4 flex flex-row space-x-4">
		<slot />
	</svelte:component>
{/if}
