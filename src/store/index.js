
import {createStore} from 'redux';
import reducers from '../reducers';

const initialState ={
    ordenes : [],
    orden:{},
    filtro:"",
    cargando_ordenes: false,
    cargando_modal:false,
    mostrar_modal:false,
    estatus:"E"
} 

const store = createStore(reducers,initialState);

export default store;