<script>
	import { Github } from 'lucide-svelte';
	import Button from '../ui/button/button.svelte';
</script>

<div class="mb-20 flex h-screen w-[40vw] flex-col items-center justify-center gap-y-1">
	<img src="/favicon.svg" alt="Logo" class="h-[164px] w-[164px]" draggable={false} />

	<h1 class="text-3xl font-medium">Acrylica</h1>

	<h1 class="text-md text-center">
		A minimalistic, acrylic-based design operating system on the web.
	</h1>

	<a href="https://github.com/StamTsag/acrylica" target="_blank" class="mt-2">
		<Button>
			<Github />
			View source
		</Button>
	</a>
</div>
