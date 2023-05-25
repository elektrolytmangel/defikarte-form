import 'leaflet';
import 'leaflet/dist/leaflet.css';
import { createRoot } from 'react-dom/client';
import App from './App';
import './custom.scss';
import './index.css';

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container);
root.render(<App />);