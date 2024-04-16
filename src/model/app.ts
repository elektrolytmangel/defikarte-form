interface FormProps {
  name:
    | 'id'
    | 'longitude'
    | 'latitude'
    | 'location'
    | 'reporter'
    | 'description'
    | 'access'
    | 'operator'
    | 'operatorPhone'
    | 'openingHours'
    | 'emergencyPhone'
    | 'indoor'
    | 'source'
    | 'level';
  rules?: any;
  type: 'text' | 'number' | 'switch' | 'select';
  options?: string[];
  label: string;
  placeholder?: string;
  defaultValue: any;
  useSwitch?: boolean;
  multiline?: boolean;
  errorMsg?: string;
  keyboardType?: string;
  infoText?: string;
}

interface AEDData {
  id?: number;
  longitude: number;
  latitude: number;
  location: string;
  reporter: string;
  description: string;
  access: string;
  operator: string;
  operatorPhone: string;
  openingHours: string;
  emergencyPhone: string;
  indoor: string;
  source: string;
  level: string;
}

interface Location {
  lat: number;
  lng: number;
}

export type { FormProps, AEDData, Location };
