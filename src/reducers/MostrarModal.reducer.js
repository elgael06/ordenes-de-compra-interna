
export const STATE_MODAL = "STATE_MODAL";

const MostrarModal =( state=false,actions )=>{
    return actions.type === STATE_MODAL ? actions.estado : state;
}

export default MostrarModal;