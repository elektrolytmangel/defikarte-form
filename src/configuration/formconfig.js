import opening_hours from 'opening_hours';

const openingHoursValidation = value => {
  let valid = false;
  try {
    new opening_hours(value);
    valid = true;
  } catch (error) {
    valid = false;
  }

  return value === '' || value === null || valid;
}

const formconfig = [
  {
    name: 'reporter',
    rules: { required: true },
    type: 'Text',
    label: 'reporter',
    placeholder: 'placeholder_reporter',
    defaultValue: '',
    errorMsg: 'error_reporter',
  },
  {
    name: 'location',
    rules: { required: true, maxLength: 200 },
    type: 'Text',
    label: 'location',
    placeholder: 'placeholder_location',
    defaultValue: '',
    errorMsg: 'error_location',
  },
  {
    name: 'level',
    rules: { required: false },
    type: 'Text',
    label: 'level',
    placeholder: 'placeholder_level',
    defaultValue: '',
  },
  {
    name: 'description',
    rules: { required: false, maxLength: 200 },
    type: 'Text',
    label: 'description',
    placeholder: 'placeholder_description',
    defaultValue: '',
    multiline: true,
    errorMsg: 'error_description',
  },
  /* not required 
  es gibt diverse opening Hour validation tools. problem: es gibt sehr viele kombinationen,
  automatische opening hours validation wäre gut: https://wiki.openstreetmap.org/wiki/Key:opening_hours#Implementation*/
  {
    name: 'openingHours',
    rules: { validate: openingHoursValidation },
    type: 'Text',
    label: 'openinghours',
    placeholder: 'placeholder_openinghours',
    defaultValue: '24/7',
    useSwitch: true,
    multiline: true,
    errorMsg: 'error_openinghours',
  },
  {
    name: 'operator',
    rules: { required: false },
    type: 'Text',
    label: 'operator',
    placeholder: 'placeholder_operator',
    defaultValue: '',
  },
  {
    name: 'operatorPhone',
    rules: { pattern: /^(\+41|0041|0)\s?(\d{2})\s?(\d{3})\s?(\d{2})\s?(\d{2})$/ },
    type: 'Text',
    label: 'operatorphone',
    placeholder: 'placeholder_operatorphone',
    keyboardType: 'phone-pad',
    defaultValue: '',
    errorMsg: 'error_operatorphone',
  },
  {
    name: 'access',
    type: 'Switch',
    label: 'access',
    defaultValue: false,
  },
  {
    name: 'indoor',
    type: 'Switch',
    label: 'indoor',
    defaultValue: false,
  },
]

export default formconfig;