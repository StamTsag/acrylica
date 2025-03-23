<script lang="ts">
	import { wallpaper } from '../../../stores';
</script>

<div
	class="bg-position-[50%] fixed left-0 top-0 z-[-1] h-full w-full bg-cover bg-no-repeat"
	style={`background-image: url('${$wallpaper}')`}
></div>
