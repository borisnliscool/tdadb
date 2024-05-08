import { writable } from 'svelte/store';
import { MapIconType, type MapMarker } from './types';

export const currentMarker = writable<MapMarker | null>(null);
export const shownMarkerTypes = writable<MapIconType[]>([MapIconType.DRUG_SALE]);
