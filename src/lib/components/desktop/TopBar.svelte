<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let date = getFormattedDate();

	function getFormattedDate() {
		return new Date().toLocaleString('en-US', {
			weekday: 'long',
			month: 'long',
			day: 'numeric',
			hour: 'numeric',
			minute: '2-digit'
		});
	}

	onMount(() => {
		setInterval(() => {
			date = getFormattedDate();
		}, 60000);
	});
</script>

<div
	in:fly={{ duration: 500, y: -100 }}
	class="fixed left-0 right-0 top-2 z-[100] m-auto flex w-[75%] select-none items-center justify-center gap-x-1 overflow-hidden rounded-xl border bg-background/60 p-2.5 pl-3 pr-3 shadow-xl backdrop-blur-lg"
>
	<img src="/favicon.svg" alt="Logo" class="h-[24px] w-[24px]" draggable={false} />

	<h1 class="-translate-x-[3px] translate-y-[3.5px] font-semibold">crylica</h1>

	<span class="flex-1"></span>

	<h1 class="text-[0.8rem]">{date}</h1>
</div>
