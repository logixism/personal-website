<script>
	import Module from './Module.svelte';
	// @ts-ignore
	import Icon from './Icon.svelte';
	import Links from './Links.svelte';

	import { onMount } from 'svelte';
	import { transliterate } from '$lib/cyrlat';

	const config = {
		discordId: '804066391614423061'
	};

	let firstFetchComplete = false;
	let discordPicture =
		'https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg';

	function calculateAge() {
		const birthDate = new Date(1197669600000);
		const today = new Date();

		let age = today.getFullYear() - birthDate.getFullYear();
		const monthDifference = today.getMonth() - birthDate.getMonth();

		// adjust the age if the birthday has not occurred yet this year
		if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}

		return age;
	}

	const activities = {
		Jellyfin: {
			text: 'listening to',
			use: 'details,state'
		},
		'Visual Studio Code': {
			text: 'coding in',
			use: 'state'
		}
	};

	var activity_type_string = 'doing';
	var activity_string = 'nothing';

	// @ts-ignore
	function handleData(data) {
		discordPicture = `https://cdn.discordapp.com/avatars/804066391614423061/${data.discord_user.avatar}.png`;
		let current_activity = data.activities[0];
		if (!current_activity) {
			return;
		}
		if (typeof current_activity.name !== 'string') {
			return;
		}

		// @ts-ignore
		let activity_prefix = activities[current_activity.name];
		if (activity_prefix) {
			activity_type_string = activity_prefix.text;
			activity_string = `${current_activity[activity_prefix.use.split(',')[0]]} ${current_activity[activity_prefix.use.split(',')[1]] || ''}`;
		} else {
			activity_string = `playing ${current_activity.name}`;
		}

		firstFetchComplete = true;
	}

	async function getProfileData() {
		const data = await fetch(`https://api.lanyard.rest/v1/users/${config.discordId}`);
		return (await data.json()).data;
	}

	onMount(async () => {
		handleData(await getProfileData());
	});
</script>

<svelte:component this={Module}>
	<div class="flex">
		<div>
			<!-- opacity because the default discord logo is too white -->
			<img
				class="h-20 rounded-xl transition-all hover:h-28 {firstFetchComplete === true
					? 'opacity-100'
					: 'opacity-80'}"
				src={discordPicture}
				alt="user's profile"
			/>
		</div>
		<div class="flex flex-col pl-4">
			<div class="flex flex-row">
				<p class="text-neutral-300 text-lg font-semibold group" id="username">
					logix<span class="text-neutral-400 text-lg opacity-0 group-hover:opacity-100 transition"
						>ism / logixlol
					</span>
				</p>
			</div>
			<div class="flex flex-row pt-0.5">
				<p class="text-neutral-400 transitio">
					{activity_type_string}
					<span class="text-neutral-300/90">
						{transliterate(activity_string.toLowerCase())}
					</span>
				</p>
			</div>
		</div>
	</div>

	<!-- about user -->
	<div class="pt-4">
		<h2 class="text-xl text-neutral-300 font-semibold">about</h2>
		<div>
			<p class="text-base text-neutral-400 tracking-[0.010em] max-w-[34rem]">
				hi, i'm logix! i'm {calculateAge()} years old.<br />i press funny-looking buttons on the
				computer every day, and sometimes that results in something interesting
			</p>
		</div>
	</div>

	<!-- projects -->
	<div class="pt-4">
		<h2 class="text-xl text-neutral-300 font-semibold pb-4">projects</h2>
		<div class="flex flex-col space-y-4">
			<a
				class="p-4 outline outline-1 outline-neutral-500/10 bg-neutral-900/20 hover:bg-neutral-900/60 hover:outline-neutral-500/30 transition-all rounded-2xl flex flex-col"
				href="https://discord.com/application-directory/1195566389201739817"
				target="_blank"
			>
				<div class="flex">
					<img class="h-24 rounded-xl" src="./va.png" alt="user's profile" />
					<div class="flex flex-col pl-4">
						<div class="flex justify-between">
							<p class="text-neutral-300 font-semibold" id="username">Value Assistant</p>
							<Icon name="export" class="text-neutral-300" />
						</div>
						<p class="text-neutral-400 text-sm pt-1 tracking-[0.01em] max-w-[26rem]" id="username">
							Value Assistant is an innovative bot designed to provide information on item values
							sourced from a variety of channels.
						</p>
					</div>
				</div>
			</a>
		</div>
	</div></svelte:component
>

<svelte:component this={Module} cls="mt-4">
	<svelte:component
		this={Links}
		links={[
			{
				href: 'https://discord.com/users/804066391614423061',
				icon: 'discord',
				text: 'logix.lol',
				copytext: true
			},
			{ href: 'https://www.last.fm/user/logixism', icon: 'lastfm', text: 'logixism' },
			{ href: 'https://github.com/logixism', icon: 'github', text: 'logixism' }
		]}
	/>
</svelte:component>
