
export const ADD_ORDENES = "ADD_ORDENES";

const Ordenes =( state=[],actions)=>{
    return actions.type === ADD_ORDENES ? actions.ordenes : state;
}
export default  Ordenes;