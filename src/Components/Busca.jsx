import React from "react"
import { useState, useEffect } from 'react'
import Filmes from '../Services/dados'


const Busca = ()=>{
    const [ busca, setBusca] = useState('')
    const [ Filmes, setFilmes ] = useState([])
    const [ btnVisible, setBtnVisible ] = useState(false)

    useEffect(()=>{
        
        async function getData(){
            const response = await Filmes.get(`${busca}/filmes`)
            const data = await response.data

            if(busca!== ''){
            setFilmes(data)
        
        } 
    }
    getData()      
    

},[busca])


function handleBusca(e){
    setBusca(e.target.value)
    setBtnVisible(true)
}

function handleParams(){
    setFilmes([])
    setBtnVisible(false)    
}

return(
    <div id="container">
        <h1>
            Busca filmes
        </h1>
          <input 
            type="text" 
            placeholder="Busca aqui..." 
            onChange
            />                          
            
            <div>
                {Filmes.map(filme=>{
                    return <li key={filme.id}>{filme.name}</li>
                })}
                {btnVisible && <button onClick={handleParams}>Limpar </button>}
            </div>

            
            
        </div>
    )
  
}
export default Busca
