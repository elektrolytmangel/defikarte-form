import { Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FormProps } from '../../model/app';
import { FieldInfo } from '../FieldInfo/FieldInfo';
import './SelectForm.css';

interface Props extends FormProps {
  handle: any;
  errors: any;
  disabled: boolean;
}

const SelectForm = ({
  name,
  handle,
  label,
  errors,
  errorMsg,
  options,
  disabled,
  type,
  infoTitleKey,
  infoTextKey,
  infoLink,
  required,
}: Props) => {
  const { t } = useTranslation();

  return (
    <div className="mb-2">
      <div className="d-flex align-items-center mb-2">
        <Form.Label htmlFor={name} className="my-auto">
          {label} {required && '*'}
        </Form.Label>
        {infoTextKey && <FieldInfo titleKey={infoTitleKey} textKey={infoTextKey} infoLink={infoLink} />}
      </div>
      <Form.Select {...handle} type={type} id={name} isInvalid={errors[name]} disabled={disabled}>
        <option key="empty"></option>
        {options?.map((o) => (
          <option key={o} value={o}>
            {t(o)}
          </option>
        ))}
      </Form.Select>
      <Form.Control.Feedback type="invalid">{errorMsg ? t(errorMsg) : t(errors[name]?.message)}</Form.Control.Feedback>
    </div>
  );
};

export default SelectForm;
