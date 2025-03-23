<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { apps } from '../../stores';
	import type { Unsubscriber } from 'svelte/store';
	import Window from './Window.svelte';

	let components: any[] = [];

	let unsubscribe: Unsubscriber;

	onMount(() => {
		unsubscribe = apps.subscribe((state) => {
			if (!state) return;

			components = state.map((v) => v.component);
		});
	});

	onDestroy(() => unsubscribe && unsubscribe());
</script>

{#each components as component}
	<Window title={$apps.find((v) => v.component === component)?.title}>
		{@render component()}
	</Window>
{/each}
