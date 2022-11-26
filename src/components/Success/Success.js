import { useTranslation } from "react-i18next";
import CreateProgress from "../CreateProgress/CreateProgress";

const Success = () => {
  const { t } = useTranslation();

  return (
    <div>
      <CreateProgress title={t('step_success')} progress={100} animated={false} />

      <p>{t('thanks')}</p>
    </div>
  )
}

export default Success;