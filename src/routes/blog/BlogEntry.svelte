<script>
	export let title;
	export let content;
	export let mainImage;
</script>

<div
	class="flex justify-between bg-neutral-800/10 outline outline-1 outline-neutral-500/20 rounded-xl max-h-[60rem] overflow-scroll"
>
	<div class="ml-4 overflow-scroll">
		<h2 class="text-2xl font-semibold text-neutral-200 mt-4">{title}</h2>
		<span class="pt-4">
			{@html content}
		</span>
	</div>
	<!-- <img class="w-72 rounded-r-xl" src={mainImage} alt="blog entry" /> -->
</div>
