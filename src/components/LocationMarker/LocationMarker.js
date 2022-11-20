import { useEffect, useState } from 'react';
import { Marker, useMapEvents } from "react-leaflet";

const LocationMarker = ({ state, setState }) => {
  const [position, setPosition] = useState(null);
  useMapEvents({
    click(e) {
      setState({ ...state, latitude: e.latlng.lat, longitude: e.latlng.lng });
    }
  });

  useEffect(() => {
    if (state !== null && state.latitude != null && state.longitude != null) {
      setPosition({ lat: state.latitude, lng: state.longitude });
    }
  }, [setPosition, state]);

  return position === null ? null : (
    <Marker position={position} />
  )
}

export default LocationMarker;