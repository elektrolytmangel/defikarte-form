import { useTranslation } from "react-i18next";
import CreateProgress from "../CreateProgress/CreateProgress";

const CreateStepSuccess = () => {
  const { t } = useTranslation();

  return (
    <div className="container-fluid vh-100">
      <div className="row">
        <CreateProgress title={t('step_success')} progress={100} animated={false} />
        <p>{t('thanks')}</p>
      </div>
    </div>
  )
}

export default CreateStepSuccess;