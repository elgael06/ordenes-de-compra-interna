//librerias
import React from 'react';
//estilos
import './ordenes.scss';
//componentes
import Cargando from '../Cargando';
//conexiones
import detalle_OCI_folio from '../../conexiones/detalle_OCI_folio';

const Ordenes = ({ordenes,cargando,carga_detalle,modal,onDetalles,onCarga})=>{

    //funciones 
    const Consultar = async folio=>{
        onCarga(true)
        let orden = await detalle_OCI_folio(folio);
        onDetalles(orden);
        console.log("ordene=>",orden);
        orden!==null || error_conexion();
        
    }
    const error_conexion =()=>{
        alert("Error Al Obtener Detalle Orden");
        onCarga(false)
    }
    console.log("modal : ",modal)
    return cargando || carga_detalle ?<Cargando /> : <div className="lista-ordenes">
    {ordenes.map((orden,i)=> <div className="card  animate" key={orden.Establecimiento+"-"+i}>
        <header className="card-header ">
            <p className="card-header-title"><u onClick={()=>Consultar(orden.Folio)}>{orden.Folio}</u> </p>
            <label className="label is-right"> {" "+orden.Establecimiento}</label>
        </header>
        <div className="card-content">
            <div className="content">
                <label  className="subtitle"> <label>Solicito : </label> {orden.Nombre_solicitante}</label>
                <p className="text has-text-grey"> <b>Uso: </b> {orden.Uso_mercancia}</p>
                <br/>
    
            </div>
        </div>
        <footer className="card-footer">
            <span className="card-footer-item">{orden.Estatus}</span>
            <span className="card-footer-item">{orden.Tipo_solicitante}</span>
            <span className="card-footer-item">{orden.Fecha}</span>
        </footer>
    </div>)}
</div>;
}

export default Ordenes;

/**
 * 
     Establecimiento: "ADMINISTRACION GENERAL"
    Estatus: "AUTORIZADO"
    Fecha: "28/08/2019 12:33:34"
    Fecha_autorizacion: "28/08/2019 13:07:30"
    Folio: 4861
    Nombre_solicitante: "OFELIA ABIGAIL RAZO AGUIRRE"
    Tipo_solicitante: "EMPLEADO"
    Uso_mercancia: "FACTURACION"
    Usuario_autorizo: "JUAN MANUEL VILLEGAS PALAZUELOS"
 */