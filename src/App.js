import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateStepOne from './components/CreateSteps/CreateStepOne';
import CreateStepTwo from './components/CreateSteps/CreateStepTwo';
import Start from './components/Start/Start';
import Success from './components/Success/Success';
import './i18n/i18n';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/Create-Step-1" element={<CreateStepOne />} />
          <Route path="/Create-Step-2" element={<CreateStepTwo />} />
          <Route path="/Success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;