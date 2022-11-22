import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FORM_STATE, PROGRESS_STATE, useSharedState } from '../../hooks/useSharedState';
import CreateForm from '../CreateForm/CreateForm';
import CreateProgress from '../CreateProgress/CreateProgress';

const CreateStepTwo = () => {
  const { t } = useTranslation();
  const [progressState, setProgressState] = useSharedState(PROGRESS_STATE, 0);

  useEffect(() => {
    setProgressState(100);
  }, [setProgressState]);

  return (
    <div className='container vh-100'>
      <CreateProgress title={t('step_two')} progress={progressState} />
      <CreateForm />
    </div>
  )
}

export default CreateStepTwo;