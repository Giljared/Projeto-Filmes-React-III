import filmes from '../Services/dados'
import '../Styles/Pages/filmes.css'
import Sidebar from '../Components/Sidebar'
//import Busca from '../Components/Busca'
import BuscaFiltro from '../Components/BuscaFiltro'
import perfil from '../Services/perfis'

const Filmes = () => {

    return (
        <>
            <Sidebar/>
            <BuscaFiltro/>
            <div id="container">
                {filmes.map(filme => {
                    return <div className="card-filmes" key={filme.id}>
                        <h3> {filme.nome}</h3>
                        <p> {filme.genero}</p>
                        <img src={filme.capa} alt="capa" />
                        <p> {filme.descricao}</p>
                    </div>

                })}
            </div>
        </>
    )
}
export default Filmes


