<script lang="ts">
	import { fly, scale } from 'svelte/transition';
	import { apps } from '../../../runes.svelte';
	import type { App, AppNames } from '../../../types';
	import { items } from '../../../vars';
	import Button from '../ui/button/button.svelte';

	function toggleApp(title: AppNames) {
		if (isActive(title)) {
			apps.value = apps.value.filter((v) => v.title !== title);
		} else {
			apps.value.push(items.find((v) => v.title === title) as App);
			apps.value = apps.value;
		}
	}

	function isActive(title: AppNames) {
		return apps.value.map((v) => v.title).includes(title);
	}
</script>

<div
	in:fly={{ duration: 500, y: 100 }}
	class="fixed bottom-4 left-0 right-0 m-auto flex w-max select-none items-center justify-center gap-x-1 overflow-hidden rounded-xl border-2 bg-background/30 p-2 backdrop-blur-lg"
>
	{#each items as { title }}
		<Button
			size="icon"
			class={`min-w-none group max-w-none select-none bg-transparent p-2 ${isActive(title) && 'bg-white/10'} hover:bg-white/10`}
			onclick={() => toggleApp(title)}
		>
			{#if isActive(title)}
				<span
					class="fixed h-[3px] w-[12px] translate-y-4 rounded-full bg-white"
					transition:scale={{ duration: 150 }}
				></span>
			{/if}

			<img
				class="duration-200 group-active:scale-[0.8]"
				src={`/icons/${title.toLowerCase().replaceAll(' ', '-')}.svg`}
				alt={`${title} icon`}
				draggable={false}
			/>
		</Button>
	{/each}
</div>
