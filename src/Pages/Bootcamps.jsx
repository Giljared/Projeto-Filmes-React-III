import React from "react"
import bootcamps from '../Services/bootcamps'
import '../Styles/Pages/bootcamps.css'
import Sidebar from '../Components/Sidebar'
import BuscaFiltro from '../Components/BuscaFiltro'


const Bootcamps = () => {
    const [value, setValue] = React.useState("");
    const [bootcampsFiltrados, setBootcampsFiltrados] = React.useState(bootcamps);
    
    React.useEffect(() => {
      const busca=bootcamps.filter(bootcamp => bootcamp.nome.includes(value))
  
      setBootcampsFiltrados(busca)
    },[value])
  
    const handleOnChance = (event) => {
      setValue(event.target.value)
    }
      
      
  
    return (
      <>
        <Sidebar />
        <BuscaFiltro handleOnChance={handleOnChance}/>
        
        <div id="container">
          {bootcampsFiltrados.map((bootcamp) => {
            return (
              <div className="card-bootcamps">
                <h3>{bootcamp.nome}</h3>
                <p>Gênero:{bootcamp.genero}</p>
                
                <img src={bootcamp.img} alt="img" />
                <p>Descrição: {bootcamp.descricao}</p>
                <a href={bootcamp.link} target="_blank" rel="noopener noreferrer">Acessar o canal</a>
                
              </div>
            );
          })}
        </div>
      </>
    );
  };
  export default Bootcamps;