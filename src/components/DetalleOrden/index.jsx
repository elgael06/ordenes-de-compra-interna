//librerias
import React,{useState} from 'react';
//estilos
import './main.scss';
import autorizar_OCI_folio from '../../conexiones/autorizar_OCI_folio';
import Cargando from '../Cargando';

const DetalleOrden =({vista,orden,onCerrar})=>{
    //props 
    const {Folio,Uso_mercancia,Nombre_solicitante,Establecimiento,Estatus,Folio_servicio,Servicio,Productos} = orden;
    //state
    const [conexion,setConexion] = useState(false)
    //funciones 
    const autorizar= async Estatus=>{
        setConexion(true)
        let res = await autorizar_OCI_folio({Folio,Estatus});
        alert(res?"Guardado...":"Error Al Guardar !!!")
        !res || onCerrar();
        setTimeout(()=>{
           let btn = document.querySelector("#btn-consultar-ordenes")
           btn.click()
        },500)
        setConexion(false);
    }
    console.log("orden.Productos=>",orden)
    return !vista || (<div className="detalles modal">
            <div className="modal-card animate">
                <div className="modal-card-head">
                    <p className="modal-card-title">Detalles OCI. {Folio}</p>
                    <button className="delete" onClick={onCerrar} aria-label="close"></button>
                </div>
               {conexion ?<article className="modal-card-body"> 
                    <Cargando />
               </article>
                : <article className="modal-card-body">
                <span className="buttons"> 
                        <i className="button is-success is-rounded fa fa-check is-outlined" onClick={()=>autorizar("A")}>Autorizar.</i>
                        <i className="button is-info is-rounded fa fa-arrow-left is-outlined" onClick={()=>autorizar("P")}>Prendiente.</i>
                        <i className="button is-danger is-rounded fa fa-close is-outlined" onClick={()=>autorizar("C")}>Cancelar</i> 
                        <i className="button is-outlined is-rounded fa fa-warning" onClick={()=>autorizar("N")}>Negar.</i>
                        <hr/>
                    </span>
                    <section className="hero is-light is-rounded">
                        <label className="label">Uso :</label>
                        <span className="is-small">{Uso_mercancia}</span>
                    </section>
                    
                    <section className="hero is-light is-rounded">
                        <label className="label">Nombre Solicitante :</label>
                        <span className="is-small">{Nombre_solicitante}</span>
                    </section>

                    <section className="hero is-light is-rounded" style={{width:"50%",float:"left"}}>
                        <label className="label">Establecimiento :</label>
                        <span className="is-small">{Establecimiento}</span>
                    </section>
                    
                    <section className="hero is-light is-rounded" style={{width:"50%",float:"left"}}>
                        <label className="label">Estatus :</label>
                        <span className="is-small">{Estatus}</span>
                    </section>
                    <hr/>
                    <section  style={{display:Folio_servicio? "":"none"}} className="hero is-light is-rounded">
                        <label className="label">Folio_servicio :</label>
                        <span className="is-small">{orden.Folio_servicio}</span>
                    </section>

                    <section style={{display:Folio_servicio? "":"none"}} className="hero is-light is-rounded">
                        <label className="label">Servicio :</label>
                        <span className="subtitle is-small">{Servicio}</span>
                    </section>
                    <hr/>
                    <section className="hero is-light is-rounded">
                        <table className="table is-narrow is-fullwidth">
                            <thead className="info is-selected" style={{marginTop:130}}>
                                <tr>
                                    <th>Descripcion</th>
                                    <th>Cantidad</th>
                                    <th>Unidad</th>
                                </tr>
                            </thead>
                            { !Productos || Productos.map((producto,i) => {
                                return (<tbody key={"producto_"+i}>
                                    <tr>
                                        <td>{producto.Descripcion}</td>
                                        <td>{producto.Cantidad}</td>
                                        <td>{producto.Unidad}</td>
                                    </tr>
                                </tbody>);
                            })}
                        </table>
                    </section>
                </article>}
            </div>
    </div>);
}

export default DetalleOrden;

/**
 * Cantidad: 3
Descripcion: "LIMPIADOR CARBURADOR Y PARTES TF Y INJETECH 400G RG07659"
Unidad: "PIEZAS"
 */

/**
 * Establecimiento: "REFACCIONARIA"
Estatus: "EN VALIDACION"
Folio: 4858
Folio_servicio: 0
Folio_solicitante: 12
Nombre_solicitante: "OSCAR LOPEZ SARABIA"
Productos: [{…}]
Servicio: ""
Solicitante: "EMPLEADO"
 */