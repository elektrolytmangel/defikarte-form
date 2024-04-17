import opening_hours from 'opening_hours';
import { isPossiblePhoneNumber, isValidPhoneNumber, validatePhoneNumberLength } from 'libphonenumber-js';
import { FormProps } from '../model/app';

const openingHoursErrorsAndWarnings = (value: string): string | boolean => {
  let msg = '';
  try {
    const oh = new opening_hours(value);
    const warnings = oh.getWarnings();
    msg = warnings.join(', ');
  } catch (error) {
    msg = 'error_openinghours';
  }

  return msg === '' || value === null || value === '' ? true : msg;
};

const phonenumberValidation = (value: string) => {
  let valid =
    isPossiblePhoneNumber(value) === true &&
    isValidPhoneNumber(value) === true &&
    validatePhoneNumberLength(value, 'CH') === undefined;

  return value === null || value === '' || valid;
};

const formconfig: FormProps[] = [
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
    errorMsg: '',
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
    rules: { validate: openingHoursErrorsAndWarnings },
    type: 'text',
    label: 'openinghours',
    placeholder: 'placeholder_openinghours',
    defaultValue: '24/7',
    useSwitch: true,
    multiline: true,
  },
  {
    name: 'operator',
    rules: { required: false },
    type: 'text',
    label: 'operator',
    placeholder: 'placeholder_operator',
    defaultValue: '',
    errorMsg: '',
  },
  {
    name: 'operatorPhone',
    rules: { validate: phonenumberValidation },
    type: 'text',
    label: 'operatorphone',
    placeholder: 'placeholder_operatorphone',
    keyboardType: 'phone-pad',
    defaultValue: '',
    errorMsg: 'error_operatorphone',
  },
  {
    name: 'access',
    type: 'select',
    label: 'access',
    defaultValue: '',
    options: ['yes', 'no', 'permissive', 'private'],
    infoTitleKey: 'access_info_title',
    infoTextKey: 'access_info',
    infoLink: 'https://wiki.openstreetmap.org/wiki/Key:access',
  },
  {
    name: 'indoor',
    type: 'switch',
    label: 'indoor',
    defaultValue: false,
  },
];

export default formconfig;
