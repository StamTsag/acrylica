<script lang="ts">
	import { apps } from '../../runes.svelte';
	import Window from './Window.svelte';

	const components = $derived.by(() => {
		if (!apps) return [];

		return apps.value.map((v) => v.component);
	});
</script>

{#each components as component}
	<Window title={apps.value.find((v) => v.component === component)?.title}>
		{@render component()}
	</Window>
{/each}
