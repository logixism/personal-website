<script>
	import Icon from './Icon.svelte';

	import { onMount } from 'svelte';
	import { transliterate } from '$lib/cyrlat';

	const config = {
		discordId: '804066391614423061'
	};

	let firstFetchComplete = false;
	let track = {
		artist: 'mac demarco',
		song: 'moonlight on the river',
		id: '2fhOljbX79loRcdl47SFye'
	};
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
	// @ts-ignore
	function handleData(data) {
		discordPicture = `https://cdn.discordapp.com/avatars/804066391614423061/${data.discord_user.avatar}.png`;

		if (!data.listening_to_spotify) return;

		track.artist = data.spotify.artist;
		track.song = data.spotify.song;
		track.id = data.spotify.track_id;

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

<div
	class="w-fit h-fit pb-12 pr-12 bg-gradient-to-br from-ctp-base to-ctp-mantle outline outline-2 outline-ctp-mauve drop-shadow-lg hover:drop-shadow-2xl transition rounded-3xl"
>
	<div class="pt-8 pl-8">
		<!-- user -->
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
					<p class="text-ctp-text text-lg font-semibold group" id="username">
						logix<span
							class="text-ctp-subtext1 text-lg opacity-0 group-hover:opacity-100 transition"
							>ism</span
						>
					</p>
				</div>
				<div class="flex flex-row pt-0.5">
					<Icon name="record" width="16" height="16" class="mt-1" />
					<a class="ml-1" href="https://open.spotify.com/track/{track.id}">
						<p class="text-ctp-subtext1 transition hover:text-ctp-subtext0">
							{transliterate(track.song.toLowerCase())}
						</p>
					</a>
				</div>
			</div>
		</div>

		<!-- about user -->
		<div class="pt-4">
			<h2 class="text-xl text-ctp-text font-semibold">about me</h2>
			<div>
				<p class="text-base text-ctp-subtext1 tracking-[0.005em] max-w-[34rem]">
					just some random {calculateAge()} year old ukrainian high-schoolian, with a slight twist of
					python programming & awkwardness.
				</p>
			</div>
		</div>

		<!-- projects -->
		<div class="pt-4">
			<h2 class="text-xl text-ctp-text font-semibold pb-4">projects</h2>
			<div class="flex flex-col space-y-4">
				<a href="https://discord.com/application-directory/1195566389201739817" target="_blank">
					<div class="flex">
						<img class="h-24 rounded-full" src="./va.png" alt="user's profile" />
						<div class="flex flex-col pl-4">
							<p class="text-ctp-text font-semibold" id="username">
								Value Assistant <Icon
									name="link"
									class="inline-block absolute -translate-y-0.5 translate-x-1"
									width="2rem"
									height="2rem"
								/>
							</p>
							<p
								class="text-ctp-subtext1 text-sm pt-1 tracking-[0.01em] max-w-[26rem]"
								id="username"
							>
								Value Assistant is an innovative bot designed to provide information on item values
								sourced from a variety of channels.
							</p>
						</div>
					</div>
				</a>
			</div>
		</div>

		<!-- contacts -->
		<div class="flex flex-col pt-4">
			<h2 class="text-xl text-ctp-text font-semibold">links</h2>
			<div>
				<div class="flex flex-col pt-2">
					<div class="flex flex-row space-x-3 items-center">
						<a href="https://discord.com/users/804066391614423061">
							<Icon name="discord" width="32" height="32" class="transition hover:opacity-80" />
						</a>
						<div class="flex-grow border-t border-dashed border-ctp-mauve opacity-80"></div>
						<p class="text-ctp-subtext1 transition hover:text-ctp-subtext0">logix.lol</p>
					</div>
				</div>
				<div class="flex flex-col pt-2">
					<div class="flex flex-row space-x-3 items-center">
						<a href="https://github.com/logixism">
							<Icon name="github" width="32" height="32" class="transition hover:opacity-80" />
						</a>
						<div class="flex-grow border-t border-dashed border-ctp-mauve opacity-80"></div>
						<p class="text-ctp-subtext1 transition hover:text-ctp-subtext0">logixism</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
