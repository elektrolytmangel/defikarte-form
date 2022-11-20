import L from 'leaflet';
import { useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import LocationMarker from '../LocationMarker/LocationMarker';
import './Map.css';

const Map = ({ state, setState }) => {
  useEffect(() => {
    L.Icon.Default.imagePath = 'images/'
  }, [],)

  return (
    <MapContainer id='map' center={[46.9479, 7.4477]} zoom={12} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker state={state} setState={setState} />
    </MapContainer>
  );
}

export default Map;