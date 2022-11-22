import Form from 'react-bootstrap/Form';

const SwitchForm = ({ name, handle, label, disabled }) => {
  return (
    <div className='mb-2'>
      <Form.Check
        {...handle}
        type="switch"
        label={label}
        variant='success'
        disabled={disabled}
      />
    </div>
  );
};

export default SwitchForm;