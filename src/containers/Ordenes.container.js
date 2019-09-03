
//libreria
import { connect } from 'react-redux';
//componentes
import Ordenes from '../components/Cuerpo/Ordenes';
//actions
import { seleccionar_orden, cargando_orden, vista_modal } from '../actions/';

//funciones states
const mapStateProps=state=>({
    cargando:state.cargando_ordenes,
    carga_detalle :state.cargando_modal,
    modal:state.mostrar_modal,
    ordenes:state.ordenes.filter(e=>e.Folio.toString().search(state.filtro)>-1)
});

const mapDispatchToProps = dispatch =>({
    onDetalles(orden){
        dispatch(cargando_orden(false))
        dispatch(vista_modal( orden !== null ))
        orden===null || dispatch(seleccionar_orden(orden))
    },
    onCarga(){        
        dispatch(cargando_orden(true))
        dispatch(seleccionar_orden({}))
        dispatch(vista_modal(false))
    }
});

export default connect(mapStateProps,mapDispatchToProps)(Ordenes);