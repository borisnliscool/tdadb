import { writable } from 'svelte/store';
import { MapIconType, MapType, type MapMarker } from './types';

export const currentMarker = writable<MapMarker | null>(null);
export const currentMapType = writable<MapType>(MapType.SATELLITE);
export const shownMarkerTypes = writable<MapIconType[]>([MapIconType.DRUG_SALE]);
