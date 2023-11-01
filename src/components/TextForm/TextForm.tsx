import { Form } from 'react-bootstrap';
import './TextForm.css';
import { FormProps } from '../../model/app';
import { useTranslation } from 'react-i18next';

interface Props extends FormProps {
  handle: any;
  errors: any;
  disabled: boolean;
}

const TextForm = ({ name, handle, label, errors, errorMsg, placeholder, disabled, type }: Props) => {
  const { t } = useTranslation();
  return (
    <div className="mb-2">
      <Form.Label htmlFor={name}>{label}</Form.Label>
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
