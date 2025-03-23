<script>
	import { fade } from 'svelte/transition';
	import { loading } from '../../stores';
	import Background from './desktop/Background.svelte';
	import TopBar from './desktop/TopBar.svelte';
	import BottomBar from './desktop/BottomBar.svelte';
	import Apps from './Apps.svelte';
</script>

{#if !$loading}
	<div in:fade={{ duration: 250 }} class="rounded-full">
		<TopBar />
		<Apps />
		<Background />
		<BottomBar />
	</div>
{/if}
