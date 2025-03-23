<script>
	import { onMount } from 'svelte';
	import Progress from './ui/progress/progress.svelte';
	import { loading, wallpaper } from '../../stores';
	import { fly, scale } from 'svelte/transition';

	let progress = 0;

	function checkWallpaper() {
		const savedWallpaper = localStorage.getItem('wallpaper');

		if (savedWallpaper) {
			$wallpaper = savedWallpaper;
		}
	}

	onMount(() => {
		checkWallpaper();

		const interval = setInterval(() => {
			if (progress >= 100) {
				clearInterval(interval);

				$loading = false;

				return;
			}

			progress += 1;
		}, 15);
	});
</script>

{#if progress < 100}
	<div
		class="z-100 fixed bottom-0 left-0 right-0 top-0 m-auto flex h-full w-full flex-col items-center justify-center gap-y-4 overflow-hidden bg-background/50 backdrop-blur-lg"
		transition:fly={{ duration: 500 }}
	>
		<img
			out:scale={{ duration: 100, start: 1.5 }}
			src="/favicon.svg"
			alt="Logo"
			class="h-[100px] w-[100px]"
			draggable={false}
		/>

		<Progress value={progress} class="w-[200px] transition-none duration-0" />
	</div>
{/if}
