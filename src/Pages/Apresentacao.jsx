import React from 'react'
import perfil from "../Services/perfil"
import "../Styles/Pages/perfil.css"
import Sidebar from "../Components/Sidebar";
import BuscaFiltro from "../Components/BuscaFiltro"

const Perfil = () => {
    const [value, setValue] = React.useState("")
    const [perfilFiltrados, setPerfilFiltrados]=React.useState(perfil)
    React.useEffect(()=>{
        const busca=perfil.filter(perfis =>perfis.nome.includes(value))
        setPerfilFiltrados(busca)
    },[value])

    const handleOnChance = (event) =>{
            setValue(event.target.value)
    }

    return (
        <>
            <Sidebar/>
            <BuscaFiltro handleOnChance={handleOnChance} />
            <div id="container">
            {perfilFiltrados.map(perfis => {
                    return <div className="card-perfil" key={perfis.id}>
            
              <h3>{perfil.nome}</h3>
              <h2>{perfil.descricao}</h2>
              <p><strong><i>{perfil.mensagem}</i></strong></p>

              <a href={perfil.linkedin} alt="clique" rel="noopener noreferrer" target="_blank">Linkedin</a>

              <a href={perfil.github} alt="clique" rel="noopener noreferrer" target="_blank">Github</a>

              <a href={perfil.facebook} alt="clique" rel="noopener noreferrer" target="_blank">Facebook</a>

              <a href={perfil.instagram} alt="clique" rel="noopener noreferrer" target="_blank">Instagram</a>
            
              <img src={perfil.foto} alt="foto" />
            </div>
            })}
            </div>
        </>
    )
}
export default Perfil