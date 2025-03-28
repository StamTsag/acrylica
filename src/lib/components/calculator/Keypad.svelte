<script>
	const { expand = 1, clicked, children } = $props();
</script>

<button
	class="select-none border border-white/15 p-4 duration-100 hover:bg-white/10"
	style="grid-column: span {expand};"
	onclick={clicked}
>
	{@render children()}
</button>
