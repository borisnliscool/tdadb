<script lang="ts">
	import { dev } from '$app/environment';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.scss';
</script>

<svelte:head>
	<link rel="canonical" href="https://tdadb.boris.foo" />

	{#if !dev}
		<script
			defer
			src="https://analytics.boris.foo/script.js"
			data-website-id="075d441e-94cc-4fd0-8f1a-fd7d35d1d71c"
		></script>
	{/if}
</svelte:head>

<ModeWatcher />

<div class="min-h-screen w-full">
	<slot />
</div>
