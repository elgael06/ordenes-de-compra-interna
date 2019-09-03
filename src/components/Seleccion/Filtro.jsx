import React from 'react'

const Filtro =({filtro,onFiltro})=><div className="field is-left">
    <input 
        value={filtro}
        onChange={e=>onFiltro(e.target.value)}
        className="input is-info"
        placeholder="Filtro Folio Orden..."
    />
</div>

export default Filtro;