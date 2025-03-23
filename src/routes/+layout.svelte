<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';

	import '../app.css';
	import { onMount } from 'svelte';
	let { children } = $props();

	let mounted = $state(false);

	onMount(() => {
		mounted = true;
	});
</script>

<ModeWatcher defaultMode="dark" />

{#if mounted}
	{@render children()}
{/if}
