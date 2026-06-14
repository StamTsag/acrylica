<script lang="ts">
	let isSelecting = $state(false);
	let selectionStart = $state({ x: 0, y: 0 });
	let selectionRect = $state({ x: 0, y: 0, width: 0, height: 0 });

	function handleMouseDown(e: MouseEvent) {
		if (e.button !== 0) return;
		if ((e.target as HTMLElement).closest('.window-wrap')) return;

		isSelecting = true;
		selectionStart = { x: e.clientX, y: e.clientY };
		selectionRect = { x: e.clientX, y: e.clientY, width: 0, height: 0 };
	}

	function handleMouseMove(e: MouseEvent) {
		if (!isSelecting) return;

		const x = Math.min(selectionStart.x, e.clientX);
		const y = Math.min(selectionStart.y, e.clientY);
		const width = Math.abs(e.clientX - selectionStart.x);
		const height = Math.abs(e.clientY - selectionStart.y);

		selectionRect = { x, y, width, height };
	}

	function handleMouseUp() {
		isSelecting = false;
		selectionRect = { x: 0, y: 0, width: 0, height: 0 };
	}
</script>

<svelte:window on:mousemove={handleMouseMove} on:mouseup={handleMouseUp} />

<div
	class="fixed inset-0"
	role="none"
	onmousedown={handleMouseDown}
>
	{#if isSelecting}
		<div
			class="pointer-events-none absolute border border-white/50 bg-blue-500/20"
			style="left: {selectionRect.x}px; top: {selectionRect.y}px; width: {selectionRect.width}px; height: {selectionRect.height}px;"
		></div>
	{/if}
</div>
