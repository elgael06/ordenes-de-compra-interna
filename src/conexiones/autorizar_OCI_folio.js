import Axios from "axios";
import ip from "./host";


const  autorizar_OCI_folio = async ({ Folio,Estatus })=>{
    const respuesta = await Axios.post(`${ip}api/Autorizacion_OCI`,{
        Folio,
        Estatus,
        Usuario:"",
        Pc:"SISTEMA WEB.",
        Ip:"SCOI WEB."
    });
    if(respuesta.status===200){
        return respuesta.data;   
    }
    return false;
}

export default autorizar_OCI_folio;