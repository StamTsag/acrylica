<script lang="ts">
	import { blur, scale } from 'svelte/transition';
	import Button from './ui/button/button.svelte';
	import { X } from 'lucide-svelte';
	import { apps } from '../../runes.svelte';
	import { quartInOut } from 'svelte/easing';
	import { draggable } from '@neodrag/svelte';

	let { children, title } = $props();

	function closeApp() {
		apps.value = apps.value.filter((v) => v.title !== title);
	}
</script>

<div
	class="fixed bottom-0 left-0 right-0 top-0 m-auto flex h-max max-h-[80vh] w-max flex-col overflow-hidden rounded-lg border border-border/50 bg-background/75 shadow-[0px_0px_10px_0px_rgba(0,_0,_0,_0.5)] backdrop-blur-md"
	transition:scale={{ duration: 250, start: 0, easing: quartInOut, opacity: 1 }}
	use:draggable={{ handle: '.handle' }}
>
	<div class="handle flex select-none items-center justify-end pl-2">
		<img
			class="mr-1 h-[24px] w-[24px] duration-200 group-active:scale-[0.8]"
			src={`/icons/${title.toLowerCase().replaceAll(' ', '-')}.svg`}
			alt={`${title} icon`}
			draggable={false}
		/>

		<h1 class="text-sm">{title}</h1>

		<span class="flex-1"></span>

		<Button
			onclick={closeApp}
			size="icon"
			variant="ghost"
			class="w-12 rounded-none hover:bg-destructive/50"
		>
			<X />
		</Button>
	</div>

	<div class="flex h-full flex-1 flex-col overflow-y-auto">
		{@render children()}
	</div>
</div>
