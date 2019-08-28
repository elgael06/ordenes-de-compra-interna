//libreria
import React from 'react';
//estilos
import './index.css';
import Cavecera from '../Cavecera';
import Cuerpo from '../Cuerpo';

const App=()=> {
  return (
    <div className="App content  has-text-centered-widescreen">
        <div className="card">
			<Cavecera />
			<Cuerpo />
          </div>
    </div>
  );
}

export default App;
