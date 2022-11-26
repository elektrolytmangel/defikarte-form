import { useTranslation } from "react-i18next";
import CreateProgress from "../CreateProgress/CreateProgress";

const CreateStepSuccess = () => {
  const { t } = useTranslation();

  return (
    <div className="container vh-100">
      <CreateProgress title={t('step_success')} progress={100} animated={false} />
      <p>{t('thanks')}</p>
    </div>
  )
}

export default CreateStepSuccess;