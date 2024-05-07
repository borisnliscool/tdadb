<script lang="ts">
	import CopyrightFooter from '$lib/components/CopyrightFooter.svelte';
	import Map from '$lib/components/Map.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Checkbox from '$lib/components/ui/checkbox/checkbox.svelte';
	import * as Table from '$lib/components/ui/table';
	import DefaultMarker from '$lib/markers/DefaultMarker.svelte';
	import { MapIconType, currentMarker, shownMarkerTypes } from '$lib/stores';
	import DatabaseIcon from '~icons/fa6-solid/database';

	let markers: Record<
		MapIconType,
		{
			icon: string;
			title: string;
		}
	> = {
		[MapIconType.DRUG_SALE]: {
			icon: '/markers/radar_crim_drugs.png',
			title: 'Drugs verkoop locaties'
		}
	};

	const assertMapIcon = (x: string): MapIconType => x as MapIconType;
</script>

<svelte:head>
	<title>TDA:DB</title>
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
			<div class="flex flex-col items-center gap-4">
				<div class="flex items-center gap-4">
					<span class="text-xl">
						<DatabaseIcon />
					</span>
					<h1 class="text-center text-lg font-semibold">Welkom bij TDA:DB</h1>
				</div>

				<p>Klik op een marker voor meer informatie</p>

				<Table.Root>
					<Table.Header>
						<Table.Row>
							<Table.Head class="w-2"></Table.Head>
							<Table.Head class="w-4">Marker</Table.Head>
							<Table.Head>Informatie</Table.Head>
						</Table.Row>
					</Table.Header>

					<Table.Body>
						{#each Object.entries(markers) as [type, marker]}
							<Table.Row
								on:click={() => {
									if (!$shownMarkerTypes.includes(assertMapIcon(type))) {
										shownMarkerTypes.set([...$shownMarkerTypes, assertMapIcon(type)]);
									} else {
										shownMarkerTypes.set(
											$shownMarkerTypes.filter((x) => x !== assertMapIcon(type))
										);
									}
								}}
								class="cursor-pointer select-none"
							>
								<Table.Cell>
									<Checkbox
										class="pointer-events-none"
										checked={$shownMarkerTypes.includes(assertMapIcon(type))}
									/>
								</Table.Cell>
								<Table.Cell class="grid place-items-center">
									<img src={marker.icon} alt={marker.title} class="size-6" />
								</Table.Cell>
								<Table.Cell>{marker.title}</Table.Cell>
							</Table.Row>
						{/each}
					</Table.Body>
				</Table.Root>
			</div>
		{/if}
	</div>
</div>

<div class="fixed bottom-0 left-0 p-2 text-center text-xs drop-shadow-sm">
	<CopyrightFooter />
</div>
