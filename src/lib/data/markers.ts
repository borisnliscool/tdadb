import { MapIconType, type MapMarker } from '$lib/types';
import L from 'leaflet';
import drugSale from './markers/drugSale';

const iconSizes: Record<MapIconType, [number, number]> = {
	[MapIconType.DRUG_SALE]: [30, 30]
};

export const mapIcons: Record<MapIconType, L.Icon> = {
	[MapIconType.DRUG_SALE]: L.icon({
		iconUrl: '/markers/radar_crim_drugs.png',
		className: 'marker drug-sale',
		iconSize: iconSizes[MapIconType.DRUG_SALE],
		iconAnchor: [iconSizes[MapIconType.DRUG_SALE][0] / 2, iconSizes[MapIconType.DRUG_SALE][1] / 2]
	})
};

export const allMarkers: MapMarker[] = [...drugSale];
