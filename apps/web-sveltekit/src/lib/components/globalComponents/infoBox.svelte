<script lang="ts">
	// imports
	import type { GlobalInfoBox } from "common/src/types/sanity/globalComponents/infoBox";

	// props
	export let infoBoxData: GlobalInfoBox;
</script>

<div class="border border-gray-700 p-4">
	<div>
		<h3 class="mt-2">{infoBoxData.title}</h3>
		<p class="">{infoBoxData.infoText}</p>
	</div>
</div>
