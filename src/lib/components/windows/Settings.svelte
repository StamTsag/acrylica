<script lang="ts">
	import { wallpaper } from '../../../runes.svelte';
	import { wallpaperCount, wallpaperNames } from '../../../vars';
	import Button from '../ui/button/button.svelte';

	function updateWallpaper(index: number) {
		const url = `/wallpapers/${index}.jpg`;

		localStorage.setItem('wallpaper', url);

		wallpaper.value = url;
	}

	function isActive(index: number) {
		return wallpaper.value === `/wallpapers/${index}.jpg`;
	}
</script>

<h1 class="mb-2 pl-10 text-xl font-semibold">Wallpapers</h1>

<div class="flex w-full max-w-[900px] flex-wrap items-center justify-center gap-x-2 gap-y-4 pb-10">
	{#each { length: wallpaperCount }, i}
		<Button
			variant="ghost"
			class="m-0 flex h-[150px] w-[22.5%] min-w-[150px] flex-col p-0 hover:bg-transparent"
			onclick={() => updateWallpaper(i)}
		>
			<img
				src={`/wallpapers/${i}.jpg`}
				class={`h-[125px] w-[200px] rounded-lg border-2 border-transparent duration-150 ${isActive(i) && 'border-2 border-white'}`}
				draggable={false}
				alt={`Wallpaper ${i + 1}`}
			/>

			{wallpaperNames[i]}
		</Button>
	{/each}
</div>
