<script lang="ts">
	import L from 'leaflet';
	import 'leaflet/dist/leaflet.css';

	import { cn } from '$lib/cn';
	import { allMarkers, currentMarker, shownMarkerTypes } from '$lib/stores';
	import { LeafletMap, TileLayer } from 'svelte-leafletjs';

	let map: LeafletMap | undefined;
	let markers: L.Marker<any>[] = [];

	const mapOptions = {
		center: [-67.5, -15] as [number, number],
		minZoom: 2,
		maxZoom: 5,
		zoom: 3,
		zoomControl: false,
		attributionControl: false
	};

	const tileUrl = '/map/satalite/{z}/{x}/{y}.jpg';
	const tileOptions = {
		minZoom: 0,
		maxZoom: 20,
		noWrap: true,
		continuousWorld: false
	};

	// TODO: set bounds

	const resizeMap = () => {
		if (!map) return;
		const lMap = map.getMap()!;
		lMap.invalidateSize();
	};

	const clearMarkers = () => markers.forEach((m) => m.remove());

	const rerenderMarkers = () => {
		clearMarkers();

		if (!map) return;
		const lMap = map.getMap()!;

		$allMarkers.forEach((data) => {
			if (!$shownMarkerTypes.includes(data.type)) return;

			const marker = L.marker([data.lat, data.lng], data.options);
			marker.on('click', () => currentMarker.set(data));
			marker.addTo(lMap);
			markers = [...markers, marker];
		});
	};

	$: if (map?.getMap()) {
		rerenderMarkers();
		map.getMap()!.on('click', (e) => {
			console.log(e.latlng);
		});
	}

	$: $shownMarkerTypes && rerenderMarkers();

	let className = '';
	export { className as class };
</script>

<svelte:window on:resize={resizeMap} />

<div class={cn('relative z-0 h-full w-full', className)}>
	<LeafletMap bind:this={map} options={mapOptions}>
		<TileLayer url={tileUrl} options={tileOptions} />
	</LeafletMap>
</div>

<style lang="scss">
	:global(.leaflet-container) {
		@apply bg-[#153e6a];
	}
</style>
