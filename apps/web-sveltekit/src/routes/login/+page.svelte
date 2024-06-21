<script lang="ts">
	import type { ActionData } from "./$types";
	import { Button, Alert } from "ui/svelte";
	import { enhance } from "$app/forms";

	export let form: ActionData;
</script>

<div class="container prose mx-auto mt-10">
	<h1>Login Page</h1>
	{#if form?.errorMessage}
		<Alert alertType="error">{form.errorMessage}</Alert>
	{/if}
	<form method="POST" use:enhance>
		<div class="form-control min-w-[400px]">
			<label class="label" for="email">
				<span class="label-text">Email address</span>
			</label>
			<input
				id="email"
				name="email"
				type="text"
				placeholder="must end in @noaignite.com"
				class="input input-bordered w-full"
			/>
		</div>
		<div class="form-control min-w-[400px]">
			<label class="label" for="password">
				<span class="label-text">Password</span>
			</label>
			<input
				id="password"
				name="password"
				type="password"
				placeholder="*****"
				class="input input-bordered w-full"
			/>
		</div>
		<Button variant="primary" className="mt-4">Login</Button>
	</form>
</div>
