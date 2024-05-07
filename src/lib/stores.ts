import L from 'leaflet';
import { writable } from 'svelte/store';
import type { MapMarker } from './types';

export enum MapIconType {
	DRUG_SALE = 'DRUG_SALE'
}

const iconSizes: Record<MapIconType, [number, number]> = {
	[MapIconType.DRUG_SALE]: [30, 30]
};

const mapIcons: Record<MapIconType, L.Icon> = {
	[MapIconType.DRUG_SALE]: L.icon({
		iconUrl: '/markers/radar_crim_drugs.png',
		className: 'marker drug-sale',
		iconSize: iconSizes[MapIconType.DRUG_SALE],
		iconAnchor: [iconSizes[MapIconType.DRUG_SALE][0] / 2, iconSizes[MapIconType.DRUG_SALE][1] / 2]
	})
};

export const allMarkers = writable<MapMarker[]>([
	{
		lat: 77.5988,
		lng: 27.0612,
		title: 'Marker 1',
		options: {
			icon: mapIcons.DRUG_SALE
		},
		type: MapIconType.DRUG_SALE
	},
	{
		lat: 62.9152,
		lng: 47.2293,
		title: 'Marker 2',
		options: {
			icon: mapIcons.DRUG_SALE
		},
		type: MapIconType.DRUG_SALE
	},
	{
		lat: 40.6806,
		lng: -14.6399,
		title: 'Marker 3',
		options: {
			icon: mapIcons.DRUG_SALE
		},
		type: MapIconType.DRUG_SALE
	},
	{
		lat: 59.1984,
		lng: -62.4035,
		title: 'Marker 4',
		options: {
			icon: mapIcons.DRUG_SALE
		},
		type: MapIconType.DRUG_SALE
	},
	{
		lat: 17.9787,
		lng: 66.8756,
		title: 'Marker 5',
		options: {
			icon: mapIcons.DRUG_SALE
		},
		type: MapIconType.DRUG_SALE
	},
	{
		lat: -16.2568,
		lng: 65.6422,
		title: 'Marker 6',
		options: {
			icon: mapIcons.DRUG_SALE
		},
		type: MapIconType.DRUG_SALE
	},
	{
		lat: -48.3124,
		lng: -104.1144,
		title: 'Marker 7',
		options: {
			icon: mapIcons.DRUG_SALE
		},
		type: MapIconType.DRUG_SALE
	},
	{
		lat: 44.056,
		lng: 34.8806,
		title: 'Marker 8',
		options: {
			icon: mapIcons.DRUG_SALE
		},
		type: MapIconType.DRUG_SALE
	},
	{
		lat: -27.6446,
		lng: -8.4473,
		title: 'Marker 9',
		options: {
			icon: mapIcons.DRUG_SALE
		},
		type: MapIconType.DRUG_SALE
	},
	{
		lat: -46.4983,
		lng: -52.2991,
		title: 'Marker 10',
		options: {
			icon: mapIcons.DRUG_SALE
		},
		type: MapIconType.DRUG_SALE
	},
	{
		lat: -75.3756,
		lng: -3.6551,
		title: 'Marker 11',
		options: {
			icon: mapIcons.DRUG_SALE
		},
		type: MapIconType.DRUG_SALE
	},
	{
		lat: -76.9206,
		lng: 28.7763,
		title: 'Marker 12',
		options: {
			icon: mapIcons.DRUG_SALE
		},
		type: MapIconType.DRUG_SALE
	},
	{
		lat: -73.6277,
		lng: -29.1858,
		title: 'Marker 13',
		options: {
			icon: mapIcons.DRUG_SALE
		},
		type: MapIconType.DRUG_SALE
	}
]);
export const currentMarker = writable<MapMarker | null>(null);

export const shownMarkerTypes = writable<MapIconType[]>([MapIconType.DRUG_SALE]);
