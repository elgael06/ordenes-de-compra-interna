
export const CHANGE_FILTRO = "CHANGE_FILTRO";

const Filtro =( state="",actions)=>{
    return actions.type ===CHANGE_FILTRO ? actions.filtro : state;
}

export default Filtro;
