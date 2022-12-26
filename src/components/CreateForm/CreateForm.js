import { useEffect, useState } from 'react';
import { Button, Form, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import formconfig from "../../configuration/formconfig";
import { FORM_STATE, useSharedState } from '../../hooks/useSharedState';
import SwitchForm from "../SwitchForm/SwitchForm";
import TextForm from "../TextForm/TextForm";
import './CreateForm.css';

const CreateForm = ({ loading, onSubmit }) => {
  const [state, setState] = useSharedState(FORM_STATE, {});
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { t } = useTranslation();
  const [positionError, setPositionError] = useState(null);

  useEffect(() => {
    if (state.latitude == null || state.longitude == null) {
      setPositionError(t('error_pos'))
    } else {
      setPositionError(null);
    }
  }, [state, setPositionError, t]);

  const onHandleSubmit = (formState, formValues) => {
    if (formState.latitude != null && formState.longitude != null) {
      const submitedState = { ...formState, ...formValues, emergencyPhone: '144' };
      setState(submitedState);
      onSubmit(submitedState);
    }
  }

  const renderFormComponent = () => {
    return formconfig.map((formComp, index) => {
      if (formComp.type === 'switch') {
        return <SwitchForm
          name={formComp.name}
          handle={register(formComp.name, { ...formComp.rules })}
          errors={errors}
          errorMsg={t(formComp.errorMsg)}
          defaultValue={formComp.defaultValue}
          key={index}
          label={t(formComp.label)}
          disabled={loading}

        />
      }
      else {
        return <TextForm
          name={formComp.name}
          handle={register(formComp.name, { ...formComp.rules })}
          errors={errors}
          errorMsg={t(formComp.errorMsg)}
          defaultValue={formComp.defaultValue}
          key={index}
          label={t(formComp.label)}
          placeholder={t(formComp.placeholder)}
          disabled={loading}
          type={formComp.type}
        />
      }
    })
  }

  const position = state.longitude != null && state.latitude != null ? `${state.latitude?.toFixed(4)}, ${state.longitude?.toFixed(4)}` : 'n/a';
  return (
    <Form onSubmit={handleSubmit((data) => onHandleSubmit(state, data))} className='form-inline'>
      <div className="mb-3 form-inline">
        <p htmlFor='position'>{t('position')}</p>
        <p id='position' className={positionError != null ? 'border-bottom  border-danger' : 'border-bottom'}>{position}</p>
        {positionError !== null ? <p className="error">{positionError}</p> : null}
      </div>
      {renderFormComponent()}
      <Button variant="success" type="submit" value='submit' className='w-100 my-3' disabled={loading} >
        {loading ? <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        /> : null}
        {t('submit')}</Button>
    </Form>
  );
}

export default CreateForm;