<script>
	export let description;
	export let name;
	export let link;
	export let linkText;
</script>

<div
	class="bg-gradient-to-br from-ctp-base to-ctp-mantle outline outline-2 outline-ctp-mauve drop-shadow-lg rounded-xl"
>
	<div class="flex p-4">
		<img
			src="/va.png"
			class="object-cover max-w-48 rounded-lg drop-shadow-xl"
			alt="Value Assistant logo"
		/>
		<div class="flex flex-col ml-6 mt-2">
			<h2 class="text-ctp-text font-bold text-xl">{name}</h2>
			<p class="max-w-[24rem] text-ctp-subtext0 font-medium mt-2">
				{description}
			</p>
			<a
				class="self-end mt-4 p-2 px-3 h-fit w-fit outline outline-2 outline-ctp-mauve rounded-md hover:drop-shadow-glow-ctp-mauve transition"
				href={link}
				target="_blank"
			>
				<p class="text-ctp-subtext1 text-sm font-bold">{linkText}</p>
			</a>
		</div>
	</div>
</div>
