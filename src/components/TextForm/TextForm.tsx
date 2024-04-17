import { Form } from 'react-bootstrap';
import './TextForm.css';
import { FormProps } from '../../model/app';
import { useTranslation } from 'react-i18next';
import { FieldInfo } from '../FieldInfo/FieldInfo';

interface Props extends FormProps {
  handle: any;
  errors: any;
  disabled: boolean;
}

const TextForm = ({
  name,
  handle,
  label,
  errors,
  errorMsg,
  placeholder,
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
      <Form.Control
        {...handle}
        type={type}
        id={name}
        placeholder={placeholder}
        isInvalid={errors[name]}
        disabled={disabled}
      />
      <Form.Control.Feedback type="invalid">{errorMsg ? t(errorMsg) : t(errors[name]?.message)}</Form.Control.Feedback>
    </div>
  );
};

export default TextForm;
