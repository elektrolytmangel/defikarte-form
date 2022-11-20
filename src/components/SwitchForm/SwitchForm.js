import Form from 'react-bootstrap/Form';

const SwitchForm = ({ name, handle, label, errors, errorMsg }) => {
  return (
    <div className='mb-2'>
      <Form.Check
        {...handle}
        type="switch"
        label={label}
        variant='success'
      />
    </div>
  );
};

export default SwitchForm;