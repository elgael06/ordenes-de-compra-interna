
export const SELECT_ORDEN = "SELECT_ORDEN";

const Orden = ( state={} ,actions ) => {
    return actions.type ===SELECT_ORDEN ? actions.orden :state;
}

export default Orden;