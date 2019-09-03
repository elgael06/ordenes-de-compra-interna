//libreria
import { connect } from 'react-redux';
//componentes
import Seleccion from '../components/Seleccion';
//actions
import {
    agregar_ordenes,
    cargando_ordenes,
    cambio_estatus
} from '../actions/'

//funciones states
const mapStateProps=state=>({
    cargando:state.cargando_ordenes,
    ordenes:state.ordenes
});

const mapDispatchToProps = dispatch =>({
    onOrdenes(estatus=true,ordenes=[]){
        console.log(estatus,ordenes.length)
        dispatch(cargando_ordenes(estatus));
        dispatch(agregar_ordenes(ordenes));
    },
    onEstatus(estatus="T"){
        dispatch(cambio_estatus(estatus));
    }
});

export default connect(mapStateProps,mapDispatchToProps)(Seleccion);