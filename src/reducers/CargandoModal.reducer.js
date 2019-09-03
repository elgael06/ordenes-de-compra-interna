
export const STATE_CARGA_M = "STATE_CARGA_M";

const CarandoModal =( state=false,actions)=>{
    return actions.type === STATE_CARGA_M ? actions.estado : state;
}

export default CarandoModal;