import React, { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { useTranslation, Trans } from 'react-i18next';

const ErrorAlert = ({ isError, resetError, retry, errorMsg = 'n/a' }) => {
  const { t } = useTranslation();

  if (isError) {
    return (
      <Alert variant="danger" onClose={() => resetError()} dismissible>
        <Alert.Heading>{t('error_api_title')}</Alert.Heading>
        <p>
          <Trans i18nKey="error_api">
            Errormessage: <strong>{{ errorMsg }}</strong>
          </Trans>
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => retry()} variant="outline-secondary" className='me-2'>
            {t('try_again')}
          </Button>
          <a href={`mailto:info@defikarte.ch?subject=Fehlermeldung-in-Defikarte-Form&body=${errorMsg}`}>
            <Button onClick={() => resetError()} variant="outline-danger">
              {t('contact_support')}
            </Button>
          </a>
        </div>
      </Alert>
    );
  }
}

export default ErrorAlert