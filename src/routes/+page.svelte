<script lang="ts">
	import CopyrightFooter from '$lib/components/CopyrightFooter.svelte';
	import LightSwitch from '$lib/components/LightSwitch.svelte';
	import Map from '$lib/components/Map.svelte';
	import DefaultMarker from '$lib/components/markers/DefaultMarker.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Checkbox from '$lib/components/ui/checkbox/checkbox.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	import * as RadioGroup from '$lib/components/ui/radio-group';
	import * as Table from '$lib/components/ui/table';
	import { currentMapType, currentMarker, shownMarkerTypes } from '$lib/stores';
	import { MapIconType, MapType } from '$lib/types';
	import { fade } from 'svelte/transition';

	import DiscordIcon from '~icons/fa6-brands/discord';
	import GithubIcon from '~icons/fa6-brands/github';
	import DatabaseIcon from '~icons/fa6-solid/database';

	let markerTypeNames: Record<
		MapIconType,
		{
			icon: string;
			title: string;
		}
	> = {
		[MapIconType.DRUG_SALE]: {
			icon: '/markers/radar_crim_drugs.png',
			title: 'Drug quicksell locaties'
		},
		[MapIconType.WEED]: {
			icon: '/markers/radar_weed_stash.png',
			title: 'Wiet pluk locaties'
		},
		[MapIconType.BURGLARY]: {
			icon: '/markers/radar_stash_house.png',
			title: 'Inbraak locaties'
		}
	};

	const assertMapIcon = (x: string): MapIconType => x as MapIconType;
</script>

<svelte:head>
	<title>TDA:DB</title>
</svelte:head>

<div
	class="fixed left-0 top-0 z-50 m-4 rounded-lg border bg-background/85 p-1 shadow-lg backdrop-blur-md"
>
	<LightSwitch />
	<Button href="https://boris.foo/discord" target="_blank" variant="outline" size="icon">
		<DiscordIcon class="size-4" />
	</Button>
	<Button
		href="https://github.com/borisnliscool/tdadb"
		target="_blank"
		variant="outline"
		size="icon"
	>
		<GithubIcon class="size-4" />
	</Button>
</div>

<div class="grid grid-cols-3 2xl:grid-cols-4">
	<Map class="col-span-2 h-screen 2xl:col-span-3" />

	<div class="col-span-1 flex h-full flex-col justify-between gap-4 border-l p-6">
		{#if $currentMarker}
			{#key $currentMarker}
				<div class="flex flex-col gap-4" in:fade={{ duration: 150 }}>
					<h1 class="text-center text-lg font-semibold">{$currentMarker.title}</h1>

					<svelte:component this={$currentMarker.component ?? DefaultMarker} />
				</div>

				<Button variant="outline" on:click={() => currentMarker.set(null)}>Sluiten</Button>
			{/key}
		{:else}
			<div class="flex flex-col items-center gap-8">
				<div class="flex flex-col items-center gap-4">
					<div class="flex items-center gap-4">
						<span class="text-xl">
							<DatabaseIcon />
						</span>
						<h1 class="text-center text-lg font-semibold">Welkom bij TDA:DB</h1>
					</div>

					<p>Klik op een marker voor meer informatie</p>
				</div>

				<div class="flex w-full flex-col gap-2">
					<p class="text-sm text-muted-foreground">Map achtergrond</p>

					<RadioGroup.Root value={$currentMapType}>
						<div class="flex items-center space-x-2">
							<RadioGroup.Item
								value={MapType.SATELLITE}
								id={MapType.SATELLITE}
								on:click={() => ($currentMapType = MapType.SATELLITE)}
							/>
							<Label class="cursor-pointer select-none" for={MapType.SATELLITE}>Satelliet</Label>
						</div>
						<div class="flex items-center space-x-2">
							<RadioGroup.Item
								value={MapType.ATLAS}
								id={MapType.ATLAS}
								on:click={() => ($currentMapType = MapType.ATLAS)}
							/>
							<Label class="cursor-pointer select-none" for={MapType.ATLAS}>Atlas</Label>
						</div>
					</RadioGroup.Root>
				</div>

				<Table.Root>
					<Table.Header>
						<Table.Row>
							<Table.Head class="w-2"></Table.Head>
							<Table.Head class="w-4">Marker</Table.Head>
							<Table.Head>Informatie</Table.Head>
						</Table.Row>
					</Table.Header>

					<Table.Body>
						{#each Object.entries(markerTypeNames) as [type, marker]}
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

<div class="fixed bottom-0 left-0 p-2 text-center text-xs text-white drop-shadow-sm">
	<CopyrightFooter />
</div>
