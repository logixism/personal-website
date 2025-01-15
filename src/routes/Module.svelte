<script>
	export let cls = '';
</script>

<div
	class="w-[28rem] sm:w-[36rem] h-fit md:max-h-[80rem] p-8 bg-neutral-950/90 backdrop-blur-lg outline outline-1 outline-neutral-800 hover:drop-shadow-2xl transition-all rounded-3xl {cls}"
>
	<slot />
</div>
