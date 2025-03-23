<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	// @ts-ignore
	let videoSource = null;

	onMount(async () => {
		try {
			const stream = await navigator.mediaDevices.getUserMedia({
				video: true
			});

			// @ts-ignore
			videoSource.srcObject = stream;

			// @ts-ignore
			videoSource.play();
		} catch (e) {
			console.log('Camera', e);
		}
	});

	onDestroy(() => {
		videoSource = null;
	});
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video class="min-h-[50vh] min-w-[50vw]" bind:this={videoSource}></video>
