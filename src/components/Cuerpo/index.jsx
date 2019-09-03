//libreria
import React from 'react';
//estilos
import './main.scss'
//componentes
import Seleccion from '../../containers/Select.container';
import Ordenes from '../../containers/Ordenes.container';
import Filtro from '../../containers/Filtro.container';

const Cuerpo =()=>{
    return(<div className="card-content cuerpo-app">
        <Seleccion />
        <Filtro />
        <Ordenes />
    </div>);
}

export default Cuerpo;