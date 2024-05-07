<script lang="ts">
	import CopyrightFooter from '$lib/components/CopyrightFooter.svelte';
	import Map from '$lib/components/Map.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import DefaultMarker from '$lib/markers/DefaultMarker.svelte';
	import { currentMarker } from '$lib/stores';
</script>

<svelte:head>
	<title>TDA DB</title>
</svelte:head>

<div class="grid grid-cols-3 2xl:grid-cols-4">
	<Map class="col-span-2 h-screen 2xl:col-span-3" />

	<div
		class="col-span-1 flex h-full flex-col justify-between gap-4 border-l border-neutral-700 p-6"
	>
		{#if $currentMarker}
			<div class="flex flex-col gap-4">
				<h1 class="text-center text-lg font-semibold">{$currentMarker.title}</h1>

				<svelte:component this={$currentMarker.component ?? DefaultMarker} />
			</div>

			<Button variant="outline" on:click={() => currentMarker.set(null)}>Sluiten</Button>
		{:else}
			<h1 class="text-center text-lg font-semibold">Klik op een marker voor informatie</h1>
		{/if}
	</div>
</div>

<div class="fixed bottom-0 left-0 p-2 text-center text-xs drop-shadow-sm">
	<CopyrightFooter />
</div>
