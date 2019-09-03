
//libreria
import { connect } from 'react-redux';
//componentes
import Filtro from '../components/Seleccion/Filtro';
//actions
import { fitrar } from '../actions/'

//funciones states
const mapStateProps=state=>({
    filtro:state.filtro
});

const mapDispatchToProps = dispatch =>({
    onFiltro(filtro=""){
        dispatch(fitrar(filtro));
    },
});

export default connect(mapStateProps,mapDispatchToProps)(Filtro);