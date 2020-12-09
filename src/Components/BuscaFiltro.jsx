import React from 'react'
import '../Styles/Pages/buscafiltro.css'


const BuscaFiltro = (props) => {
    return (
        <div className="busca">
            <input type="text"
                placeholder="Busca aqui..."
                onChange={props.handleOnChance}
                text-align center />
        </div>

    )
}
export default BuscaFiltro