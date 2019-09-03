
export const CHANGE_ESTATUS = "CHANGE_ESTATUS";

const Estatus = ( state="T",actions)=>{
    return actions.type === CHANGE_ESTATUS ? actions.estatus : state;
}

export default Estatus;