<script lang="ts">
	import type { WithElementRef, WithoutChildren } from 'bits-ui';
	import type { HTMLTextareaAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';
	import autosize from 'svelte-autosize';

	let {
		ref = $bindable(null),
		value = $bindable(),
		class: className,
		...restProps
	}: WithoutChildren<WithElementRef<HTMLTextareaAttributes>> = $props();
</script>

<textarea
	bind:this={ref}
	class={cn(
		'flex h-full min-h-[80px] w-full rounded-md bg-transparent px-3 py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
		className
	)}
	bind:value
	use:autosize
	{...restProps}
></textarea>
