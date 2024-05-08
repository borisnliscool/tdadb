import { MapIconType, type MapMarker } from '$lib/types';
import L from 'leaflet';
import burglaries from './markers/burglaries';
import drugSale from './markers/drugSale';
import weed from './markers/weed';

const iconSizes: Record<MapIconType, [number, number]> = {
	[MapIconType.DRUG_SALE]: [30, 30],
	[MapIconType.WEED]: [30, 30],
	[MapIconType.BURGLARY]: [30, 30]
};

export const mapIcons: Record<MapIconType, L.Icon> = {
	[MapIconType.DRUG_SALE]: L.icon({
		iconUrl: '/markers/radar_crim_drugs.png',
		className: 'marker drug-sale',
		iconSize: iconSizes[MapIconType.DRUG_SALE],
		iconAnchor: [iconSizes[MapIconType.DRUG_SALE][0] / 2, iconSizes[MapIconType.DRUG_SALE][1] / 2]
	}),
	[MapIconType.WEED]: L.icon({
		iconUrl: '/markers/radar_weed_stash.png',
		className: 'marker weed',
		iconSize: iconSizes[MapIconType.WEED],
		iconAnchor: [iconSizes[MapIconType.WEED][0] / 2, iconSizes[MapIconType.WEED][1] / 2]
	}),
	[MapIconType.BURGLARY]: L.icon({
		iconUrl: '/markers/radar_stash_house.png',
		className: 'marker burglary',
		iconSize: iconSizes[MapIconType.BURGLARY],
		iconAnchor: [iconSizes[MapIconType.BURGLARY][0] / 2, iconSizes[MapIconType.BURGLARY][1] / 2]
	})
};

export const allMarkers: MapMarker[] = [...drugSale, ...weed, ...burglaries];
