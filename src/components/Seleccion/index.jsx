import React,{useState} from 'react';
import obtener_orden from '../../conexiones/obteber_OCI_filtro';

const estatus =[ "En Validacion","Autorizado"];

const Seleccion =({cargando,onOrdenes,onEstatus})=>{
    //estados
    const [estado,setStado] = useState("En Validacion");
    //funciones
    const Consultar = async (filtro=estado) =>{
        const estatus_ =  filtro.slice(0,1) ;
        onEstatus(estatus_);
        onOrdenes();
        let res = await obtener_orden(estatus_);
        setTimeout(()=>onOrdenes(false,res),2000);
    }
    //eventos
    const onConsultar=()=>{
        Consultar();
    }
    const onCambiar= async e=>{
        setStado(e.target.value);
        await Consultar(e.target.value);
    }
    const BtnConsulta =()=> !cargando ? <i className="button is-link" id="btn-consultar-ordenes" onClick={onConsultar}>Consultar.</i> 
        : <i className="button is-primary is-loading">loading...</i>
    //return
    return(<div className="field  has-addons is-left">
        <div className="control is-expanded">
            <span className="select  is-fullwidth is-info">
                <select name="ordenes" 
                    disabled={cargando}
                    defaultValue={estado}
                    onChange={onCambiar}>
                    {estatus.map(est=><option value={est} key={est}>{est}</option>)}
                </select>
            </span>
        </div>
        <div className="control">
            <BtnConsulta/>
        </div>
    </div>);
}

export default Seleccion;