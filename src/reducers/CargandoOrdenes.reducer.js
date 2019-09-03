
export const ESTATE_ORDEN = "ESTATE_ORDEN";

const CargandoOrdenes =( state=false,actions )=>{
    return actions.type === ESTATE_ORDEN ? actions.estado : state;
}

export default CargandoOrdenes;