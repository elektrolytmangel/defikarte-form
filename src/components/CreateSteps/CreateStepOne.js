import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { PROGRESS_STATE, useSharedState } from "../../hooks/useSharedState";
import CreateProgress from "../CreateProgress/CreateProgress";
import Map from "../Map/Map";

const CreateStepOne = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [progressState, setProgressState] = useSharedState(PROGRESS_STATE, 0);

  useEffect(() => {
    setProgressState(50);
  }, [setProgressState]);

  return (
    <div className='container vh-100'>
      <CreateProgress title={t('step_one')} progress={progressState} />
      <div className='mb-3'>
        <Map />
      </div>
      <Button variant='success' onClick={() => navigate('/Create-Step-2')}>{t('select')}</Button>
    </div>
  )
}

export default CreateStepOne;