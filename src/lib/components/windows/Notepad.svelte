<script lang="ts">
	import Textarea from '../ui/textarea/textarea.svelte';

	let note = '';

	$: localStorage.setItem('note', note);

	$: note = localStorage.getItem('note') || '';
</script>

<Textarea
	class="h-[100%] h-screen w-[50vw] resize-none rounded-none"
	placeholder="Type something..."
	bind:value={note}
/>
