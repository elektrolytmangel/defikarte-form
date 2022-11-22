import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import useApi, { ERROR, IDLE, LOADING } from '../../hooks/useApi';
import { FORM_STATE, PROGRESS_STATE, useSharedState } from '../../hooks/useSharedState';
import CreateForm from '../CreateForm/CreateForm';
import CreateProgress from '../CreateProgress/CreateProgress';

const CreateStepTwo = () => {
  const { t } = useTranslation();
  const [progressState, setProgressState] = useSharedState(PROGRESS_STATE, 0);
  const [formState] = useSharedState(FORM_STATE, {});
  const { request, state: apiState } = useApi();

  useEffect(() => {
    if (formState.isValid && apiState == IDLE) {
      request({ url: '/defibrillator', data: formState });
    }
  }, [formState, apiState, request]);

  useEffect(() => {
    setProgressState(100);
  }, [setProgressState]);

  return (
    <div className='container vh-100'>
      <CreateProgress title={t('step_two')} progress={progressState} />
      <CreateForm loading={apiState === LOADING} />
      {apiState === ERROR ? <p>{t('error_api')}</p> : null}
    </div>
  )
}

export default CreateStepTwo;