import { Form } from "react-bootstrap";
import './TextForm.css';

const TextForm = ({ name, handle, label, errors, errorMsg, placeholder, disabled }) => {
  return (
    <div className="mb-2">
      <Form.Label htmlFor={name}>{label}</Form.Label>
      <Form.Control
        {...handle}
        type="text"
        id={name}
        placeholder={placeholder}
        isInvalid={errors[name]}
        disabled={disabled}
      />
      <Form.Control.Feedback type="invalid">
        {errorMsg}
      </Form.Control.Feedback>
    </div>
  );
}

export default TextForm;