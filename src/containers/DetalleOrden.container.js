//libreria
import { connect } from 'react-redux';
//componentes
import DetalleOrden from '../components/DetalleOrden';
//actions
import { seleccionar_orden, cargando_orden, vista_modal } from '../actions/';

//funciones states
const mapStateProps=state=>({
    orden:state.orden,
    vista:state.mostrar_modal,
});

const mapDispatchToProps = dispatch =>({
    onCerrar(){
        dispatch(cargando_orden(false))
        dispatch(vista_modal( false))
        dispatch(seleccionar_orden({}))
    },
});

export default connect(mapStateProps,mapDispatchToProps)(DetalleOrden);