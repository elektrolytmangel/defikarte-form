import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Trans } from 'react-i18next';
import { FaCircleInfo } from 'react-icons/fa6';

type Props = {
  text: string;
};

export const FieldInfo = ({ text }: Props) => {
  return (
    <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={(props) => (
        <Tooltip id="overlay-info" {...props}>
          <Trans i18nKey={text} />
        </Tooltip>
      )}
    >
      <span className="mx-2">
        <FaCircleInfo />
      </span>
    </OverlayTrigger>
  );
};
