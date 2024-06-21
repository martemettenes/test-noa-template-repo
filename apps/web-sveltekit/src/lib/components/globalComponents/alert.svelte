<script lang="ts">
	// imports
	import type { GlobalAlert } from "common/src/types/sanity/globalComponents/alert";

	// props
	export let alertData: GlobalAlert;
</script>

<div class="border border-gray-700 p-4">
	<p>{alertData.title}</p>
	<p>{alertData.alertText}</p>
</div>
