//libreria
import React from 'react';
//estilos
import './index.css';
import Cavecera from '../Cavecera';
import Cuerpo from '../Cuerpo';
import DetalleOrden from '../../containers/DetalleOrden.container';

const App=()=> {
  return (<div className="App content  has-text-centered-widescreen">
	<div className="card">
    	<Cavecera />
        <Cuerpo />
	</div>
    <DetalleOrden />
</div>);
}

export default App;
