import type { ComponentType, SvelteComponent } from 'svelte';

interface MapMarker {
	lat: number;
	lng: number;
	options?: L.MarkerOptions;
	type: MapIconType;

	title: string;
	component?: ComponentType<SvelteComponent>;
}

enum MapIconType {
	DRUG_SALE = 'DRUG_SALE'
}

enum MapType {
	SATELLITE = 'SATELLITE',
	ATLAS = 'ATLAS'
}

export { MapIconType, MapType, type MapMarker };
