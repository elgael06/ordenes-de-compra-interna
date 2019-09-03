//librerias
import { combineReducers } from "redux";
//reducers
import ordenes from './Ordenes.reducer';
import orden from './Orden.reducer';
import filtro from './Filtro.reducer';
import cargando_ordenes from './CargandoOrdenes.reducer';
import cargando_modal from './CargandoModal.reducer';
import mostrar_modal from './MostrarModal.reducer';
import estatus from './Estatus.reducer';

const reducers = combineReducers({
    ordenes,
    orden,
    filtro,
    cargando_ordenes,
    cargando_modal,
    mostrar_modal,
    estatus
});

export default reducers;