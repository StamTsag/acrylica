<script>
	import { fade } from 'svelte/transition';
	import { loading } from '../../runes.svelte';
	import Background from './desktop/Background.svelte';
	import TopBar from './desktop/TopBar.svelte';
	import BottomBar from './desktop/BottomBar.svelte';
	import Apps from './Apps.svelte';
</script>

{#if !loading.value}
	<div in:fade={{ duration: 250 }} class="rounded-full">
		<TopBar />
		<Apps />
		<Background />
		<BottomBar />
	</div>
{/if}
