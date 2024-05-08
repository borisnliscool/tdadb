<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import '../app.scss';
</script>

<svelte:head>
	<link rel="canonical" href="https://tdadb.boris.foo" />
</svelte:head>

<ModeWatcher />

<div class="min-h-screen w-full">
	<slot />
</div>
