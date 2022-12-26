import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import backend from '../../api/backend';
import { FORM_STATE, PROGRESS_STATE, useSharedState } from '../../hooks/useSharedState';
import CreateForm from '../CreateForm/CreateForm';
import CreateProgress from '../CreateProgress/CreateProgress';
import ErrorAlert from '../ErrorAlert/ErrorAlert';

const initErrorState = { isError: false, msg: '' };

const CreateStepTwo = () => {
  const { t } = useTranslation();
  const navigate = useNavigate()
  const [progressState, setProgressState] = useSharedState(PROGRESS_STATE, 0);
  const [state, setState] = useSharedState(FORM_STATE, {});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(initErrorState);

  const onSubmit = (aedData) => {
    setLoading(true);
    backend.post('/defibrillator', { ...aedData, source: 'local_knowledge, defikarte.ch' })
      .then(r => {
        setState({}); // reseting form data, so no old data anymore. user has to start from beginning
        navigate('/Create-Step-Success');
      })
      .catch(e => {
        setError({ isError: true, msg: e.message });
      })
      .finally(() => setLoading(false));
  }

  const retry = (aedData) => {
    setError(initErrorState);
    onSubmit(aedData);
  }

  useEffect(() => {
    setProgressState(100);
  }, [setProgressState]);

  return (
    <div className='container-fluid vh-100 d-flex flex-column'>
      <CreateProgress title={t('step_two')} progress={progressState} />
      <ErrorAlert isError={error.isError} errorMsg={error.msg} retry={() => retry(state)} resetError={() => setError(initErrorState)} />
      <CreateForm loading={loading} onSubmit={onSubmit} />
    </div >
  )
}

export default CreateStepTwo;