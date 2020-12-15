import React from 'react'
import perfis from "../Services/perfis";
import "../Styles/Pages/perfis.css";
import Sidebar from "../Components/Sidebar";
import BuscaFiltro from "../Components/BuscaFiltro"

const Perfis = () => {
    const [value, setValue] = React.useState("");
    const [perfisFiltrados, setPerfisFiltrados] = React.useState(perfis)

    React.useEffect(() => {
        const busca = perfis.filter(perfil => perfil.nome.includes(value))

        setPerfisFiltrados(busca)
    }, [value])

    const handleOnChance = (event) => {
        setValue(event.target.value)
    }

    return (
        <>
            <Sidebar />
            <BuscaFiltro handleOnChance={handleOnChance} />



            <div id="container">




                {perfisFiltrados.map((perfil) => {

                    return (

                        <div className="card-perfis">

                            <div className="video">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/LiSnzK3MXfw" frameborder="0" allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture" allowfullscreen></iframe>
                            </div>

                            <h2>{perfil.nome}</h2>
                            <p> Desenvolvedora Front-End (Html, CSS, Java Script e React) - Graduada em Mátemática e Pós-graduanda em Docência do Ensino Superior. {perfil.descricao}</p>

                            <a href={perfil.linkedin} alt="clique" rel="noopener noreferrer" target="_blank">Linkedin</a>

                            <a href={perfil.github} alt="clique" rel="noopener noreferrer" target="_blank">Github</a>

                            <a href={perfil.facebook} alt="clique" rel="noopener noreferrer" target="_blank">Facebook</a>

                            <a href={perfil.instagram} alt="clique" rel="noopener noreferrer" target="_blank">Instagram</a>

                            <img src={perfil.foto} alt="foto" />

                        </div>


                    );
                })}

            </div>
        </>
    );
};
export default Perfis