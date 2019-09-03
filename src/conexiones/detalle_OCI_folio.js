import Axios from "axios";
import ip from "./host";

const detalle_OCI_folio = async folio =>{
    let respuesta = await Axios.get(`${ip}api/Detalle_OCI?folio=${folio}`);
    return respuesta.status ===200 ? respuesta.data : null;
}

export default detalle_OCI_folio;