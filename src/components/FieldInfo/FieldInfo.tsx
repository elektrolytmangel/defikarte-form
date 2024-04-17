import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Trans, useTranslation } from 'react-i18next';
import { FaRegCircleQuestion } from 'react-icons/fa6';
import './FieldInfo.css';

type Props = {
  titleKey?: string;
  textKey: string;
  infoLink?: string;
};

export const FieldInfo = ({ textKey, titleKey, infoLink }: Props) => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  return (
    <>
      <button className="field-info-icon-button" type="button" onClick={() => setShow(true)}>
        <FaRegCircleQuestion size={18} />
      </button>
      <Modal show={show} onHide={() => setShow(false)}>
        {titleKey && (
          <Modal.Header closeButton>
            <Modal.Title>{t(titleKey)}</Modal.Title>
          </Modal.Header>
        )}
        <Modal.Body>
          <Trans i18nKey={textKey} />
        </Modal.Body>
        {infoLink && (
          <Modal.Footer className="d-flex justify-content-center">
            <Button variant="link" href={infoLink} target="__blank">
              {t('more_information')}
            </Button>
          </Modal.Footer>
        )}
      </Modal>
    </>
  );
};
