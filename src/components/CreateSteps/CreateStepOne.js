import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { FORM_STATE, PROGRESS_STATE, useSharedState } from "../../hooks/useSharedState";
import CreateProgress from "../CreateProgress/CreateProgress";
import Map from "../Map/Map";

const CreateStepOne = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [progressState, setProgressState] = useSharedState(PROGRESS_STATE, 0);
  const [formState] = useSharedState(FORM_STATE, {});

  useEffect(() => {
    setProgressState(50);
  }, [setProgressState]);

  const positionAvailable = (formState.latitude != null && formState.longitude != null);
  return (
    <div className='container vh-100'>
      <div className="row">
        <CreateProgress title={t('step_one')} progress={progressState} />
      </div>
      <div className="row">

        <Map />
      </div>
      <div className="row m-2">
        <Button
          disabled={!positionAvailable}
          variant='success'
          onClick={() => navigate('/Create-Step-2')}>{t('select')}
        </Button>
      </div>

    </div>
  )
}

export default CreateStepOne;