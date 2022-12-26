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
    type: 'text',
    label: 'reporter',
    placeholder: 'placeholder_reporter',
    defaultValue: '',
    errorMsg: 'error_reporter',
  },
  {
    name: 'location',
    rules: { required: true, maxLength: 200 },
    type: 'text',
    label: 'location',
    placeholder: 'placeholder_location',
    defaultValue: '',
    errorMsg: 'error_location',
  },
  {
    name: 'level',
    rules: { required: false },
    type: 'number',
    label: 'level',
    placeholder: 'placeholder_level',
    defaultValue: '',
  },
  {
    name: 'description',
    rules: { required: false, maxLength: 200 },
    type: 'text',
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
    type: 'text',
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
    type: 'text',
    label: 'operator',
    placeholder: 'placeholder_operator',
    defaultValue: '',
  },
  {
    name: 'operatorPhone',
    rules: { pattern: /^(\+41|0041)\s?(\d{2})\s?(\d{3})\s?(\d{2})\s?(\d{2})$/ },
    type: 'text',
    label: 'operatorphone',
    placeholder: 'placeholder_operatorphone',
    keyboardType: 'phone-pad',
    defaultValue: '',
    errorMsg: 'error_operatorphone',
  },
  {
    name: 'access',
    type: 'switch',
    label: 'access',
    defaultValue: false,
  },
  {
    name: 'indoor',
    type: 'switch',
    label: 'indoor',
    defaultValue: false,
  },
]

export default formconfig;