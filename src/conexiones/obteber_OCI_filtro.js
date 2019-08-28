import Axios from "axios";
import ip from "./host";


const obtener_orden = async estatus=>{
    let res = await Axios.get(`${ip}api/Obtener_OCI/?estatus=${estatus}`);
    //console.log("respuesta =>",res)
    return res.status===200 ? res.data :[];
}

export default obtener_orden;