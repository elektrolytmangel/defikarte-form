import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Start.css';

const Start = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className='container'>
      <div className='row mt-5'>
        <div className='d-flex justify-content-center align-items-center'>
          <div className='border border-2 rounded-circle d-flex justify-content-center align-items-center' id='logo-border'>
            <img src={logo} alt='defikarte' id='logo' />
          </div>
        </div>
      </div>
      <div className='row mt-5 '>
        <Button variant='success' onClick={() => navigate('/Create-Step-1')} >{t('start')}</Button >
      </div>
    </div>
  )
}

export default Start;