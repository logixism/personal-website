<script lang="ts">
	import LastFM from '~icons/ph/lastfm-logo';
	import Discord from '~icons/ph/discord-logo';
	import Github from '~icons/ph/github-logo';
	import Music from '~icons/ph/music-notes';
	import Export from '~icons/ph/export';

	export let name: keyof typeof icons;
	let icons = {
		lastfm: LastFM,
		discord: Discord,
		github: Github,
		music: Music,
		export: Export
	};
	let displayIcon = icons[name];
</script>

<svelte:component this={displayIcon} {...$$restProps} />
