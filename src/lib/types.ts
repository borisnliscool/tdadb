import type { ComponentType, SvelteComponent } from 'svelte';
import type { MapIconType } from './stores';

export interface MapMarker {
	lat: number;
	lng: number;
	options?: L.MarkerOptions;
	type: MapIconType;

	title: string;
	component?: ComponentType<SvelteComponent>;
}
