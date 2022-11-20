import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import AEDService from '../../services/AEDService';
import Form from "../CreateForm/CreateForm";
import Map from "../Map/Map";
import './Create.css';

const Create = () => {
  const { t } = useTranslation();
  const [state, setState] = useState({});

  useEffect(() => {
    if (state?.isValid) {
      AEDService.create(state);
    }
  }, [state]);

  return (
    <div className="container">
      <div className="row">
        <h1>{t('title')}</h1>
        <div className="col-sm-12 col-md-6 order-xs-2 order-sm-2 form-overflow">
          <Form state={state} setState={setState} />
        </div>
        <div className="col-sm-12 col-md-6 order-xs-1 order-sm-1">
          <Map state={state} setState={setState} />
        </div>
      </div>
    </div>
  );
}

export default Create;