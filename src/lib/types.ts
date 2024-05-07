import type { ComponentType, SvelteComponent } from 'svelte';

export interface MapMarker {
	lat: number;
	lng: number;
	options?: L.MarkerOptions;

	title: string;
	component?: ComponentType<SvelteComponent>;
}
