import { useEffect, useState } from 'react';
import { Marker, useMapEvents } from "react-leaflet";
import { FORM_STATE, useSharedState } from '../../hooks/useSharedState';

const LocationMarker = () => {
  const [formState, setFormState] = useSharedState(FORM_STATE, {})
  const [position, setPosition] = useState(null);

  useMapEvents({
    click(e) {
      setFormState({ ...formState, latitude: e.latlng.lat, longitude: e.latlng.lng });
    }
  });

  useEffect(() => {
    if (formState !== null && formState.latitude != null && formState.longitude != null) {
      setPosition({ lat: formState.latitude, lng: formState.longitude });
    }
  }, [setPosition, formState]);

  return position === null ? null : (
    <Marker position={position} />
  )
}

export default LocationMarker;