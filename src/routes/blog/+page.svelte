<script>
	import BlogModule from './BlogModule.svelte';
	import BlogEntry from './BlogEntry.svelte';

	import Navbar from '../Navbar.svelte';
	import NavbarLink from '../NavbarLink.svelte';
</script>

<Navbar blog="true">
	<NavbarLink text="home" href="/" />
	<NavbarLink text="blog" href="/blog" />
</Navbar>

<svelte:component this={BlogModule} cls="overflow-scroll space-y-4">
	<div
		class="flex justify-between bg-neutral-800/10 outline outline-1 outline-neutral-500/20 rounded-xl"
	>
		<div class="p-4 pt-0">
			<h2 class="text-2xl font-semibold text-neutral-200 mt-4">Why we love cats</h2>
			<p class="text-lg text-neutral-300">
				Written by <span class="text-blue-400"> admin </span>
				<img
					class="inline ml-2 w-8 rounded-full"
					src="https://cdn.discordapp.com/avatars/804066391614423061/111fa0993411f005e5d0537a7a4e517e.png"
				/>
			</p>
			<div class="pt-2">
				<p class="text-neutral-400 text-lg">
					Cats have been beloved companions to humans for thousands of years. Their mysterious
					nature and graceful movements have captivated the hearts of many. From ancient Egypt where
					they were revered as gods, to modern households where they nap on our couches, cats have
					always held a special place in human history.
				</p>
				<img
					src="https://placecats.com/neo/800/200"
					alt="cute cat image"
					class="rounded-lg shadow-lg my-4"
				/>
				<p class="text-neutral-400 text-lg">
					One of the reasons people adore cats is their independent nature. Unlike dogs, who often
					rely on human interaction, cats are perfectly content to spend their days lounging in the
					sun or exploring their territory. This independence makes them ideal pets for people who
					work long hours or who prefer a more low-maintenance companion.
				</p>
				<img
					src="https://placecats.com/neo_2/800/200"
					alt="playful cat image"
					class="rounded-lg shadow-lg my-4"
				/>
				<p class="text-neutral-400 text-lg">
					Cats also offer a plethora of health benefits. Studies have shown that owning a cat can
					reduce stress and anxiety, lower blood pressure, and even decrease the risk of heart
					attack. Their purring is not only a sign of contentment but also has healing properties.
					The frequency of a cat's purr can promote bone healing and reduce inflammation.
				</p>
				<img
					src="https://placecats.com/neo_banana/800/200"
					alt="relaxed cat image"
					class="rounded-lg shadow-lg my-4"
				/>
				<p class="text-neutral-400 text-lg">
					Another reason for the cat's widespread popularity is their playfulness. Even as adults,
					cats retain a kitten-like curiosity and energy. Whether they are chasing a toy mouse or
					pouncing on a string, their antics provide endless entertainment. It's this playful spirit
					that endears them to people of all ages.
				</p>
				<img
					src="https://placecats.com/millie_neo/800/200"
					alt="curious cat image"
					class="rounded-lg shadow-lg my-4"
				/>
				<p class="text-neutral-400 text-lg">
					In conclusion, cats are more than just pets; they are family members. Their unique
					personalities and behaviors bring joy and comfort to millions of people around the world.
					Whether you're a long-time cat lover or considering adopting your first feline friend,
					it's easy to see why cats will always be cherished in our hearts.
				</p>
			</div>
		</div>
		<!-- <img class="w-72 rounded-r-xl" src={mainImage} alt="blog entry" /> -->
	</div>
</svelte:component>

<svelte:component this={BlogModule} cls="mt-4 flex items-center justify-between h-[5rem]">
	<h1 class="text-neutral-300 font-bold text-xl">
		Subscribe to the blog for <span class="text-red-400"> important </span> cat updates!
	</h1>
	<div>
		<input
			placeholder="youremail@here.com"
			type="text"
			class="rounded-lg h-12 text-lg text-neutral-300 bg-neutral-800/10 outline outline-1 outline-neutral-500/20 text-center"
		/>
		<button
			type="button"
			class="bordered bg-neutral-800/20 ml-4 h-12 hover:bg-neutral-900/60 transition-all rounded-lg px-4 py-2 text-neutral-300 font-semibold outline outline-1 outline-neutral-500/20"
		>
			Subscribe
		</button>
	</div>
</svelte:component>
