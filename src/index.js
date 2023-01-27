import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NombreCompleto as Name} from './components/NombreCompleto';
import Mascota from './components/mascota';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <Name name = "Sergio" age={30} show= {true}/>
    <Mascota name = "Solovino" age= {8} show= {false}/>
    <Name name = "Pax" age= {30} show= {false}/>
    <Name name="Miriam" age={24} show= {true}/>
  </React.StrictMode>
);


