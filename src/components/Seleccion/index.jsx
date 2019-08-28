import React,{useState} from 'react';
import obtener_orden from '../../conexiones/obteber_OCI_filtro';

const estatus =["Todos","Autorizado","Surtido","Cancelado"];

const Seleccion =()=>{
    //estados
    const [consulta, setConsulta] = useState(false);
    const [estado,setStado] = useState("Todos");
    //funciones
    const Consultar = async filtro =>{
        const estatus_ =  filtro || estado;
        setConsulta(true);
        console.log("Filtro=>", filtro || estado);
        let res = await obtener_orden(estatus_.slice(0,1));
        console.log("Ordenes=>",res);
        setTimeout(()=>setConsulta(false),2000);
    }
    const onCambiar= async e=>{
        setStado(e.target.value);
        await Consultar(e.target.value);
    }
    const BtnConsulta =()=>!consulta ? <i className="button is-link" onClick={()=>Consultar()}>Consultar.</i> 
        : <i className="button is-primary is-loading">loading...</i>

    return(<div className="field  has-addons">
        <div className="control is-expanded">
            <span className="select  is-fullwidth">
                <select name="ordenes" 
                    disabled={consulta}
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