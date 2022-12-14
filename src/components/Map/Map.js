import L from 'leaflet';
import { useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import LocationMarker from '../LocationMarker/LocationMarker';
import './Map.css';

const Map = () => {
  useEffect(() => {
    L.Icon.Default.imagePath = 'images/'
  }, [],)

  return (
    <MapContainer id='map' center={[47.39595583, 8.637702055]} zoom={11} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.osm.ch/osm-swiss-style/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  );
}

export default Map;