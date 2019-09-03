//types
import { ADD_ORDENES } from "../reducers/Ordenes.reducer";
import { SELECT_ORDEN } from "../reducers/Orden.reducer";
import { CHANGE_FILTRO } from "../reducers/Filtro.reducer";
import { STATE_CARGA_M } from "../reducers/CargandoModal.reducer";
import { STATE_MODAL } from "../reducers/MostrarModal.reducer";
import { CHANGE_ESTATUS } from "../reducers/Estatus.reducer";
import { ESTATE_ORDEN } from "../reducers/CargandoOrdenes.reducer";

export const  agregar_ordenes = ordenes =>( {
    type :ADD_ORDENES,
    ordenes
});

export const seleccionar_orden=orden=>({
    type:SELECT_ORDEN,
    orden
});

export const fitrar = filtro=>({
   type:CHANGE_FILTRO,
   filtro
});

export const cargando_ordenes = estado=>({
    type:ESTATE_ORDEN,
    estado
});

export const cargando_orden= estado =>({
    type:STATE_CARGA_M,
    estado
});

export const vista_modal = estado =>({
    type:STATE_MODAL,
    estado
});

export const cambio_estatus = estatus=>({
    type:CHANGE_ESTATUS,
    estatus
});

