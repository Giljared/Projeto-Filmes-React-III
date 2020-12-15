import React from "react"
import courses from '../Services/courses'
import '../Styles/Pages/courses.css'
import Sidebar from '../Components/Sidebar'
import BuscaFiltro from '../Components/BuscaFiltro'


const Courses = () => {
    const [value, setValue] = React.useState("");
    const [coursesFiltrados, setCoursesFiltrados] = React.useState(courses);
    
    React.useEffect(() => {
      const busca=courses.filter(course => course.nome.includes(value))
  
      setCoursesFiltrados(busca)
    },[value])
  
    const handleOnChance = (event) => {
      setValue(event.target.value)
    }
  
    return (
      <>
        <Sidebar />
        <BuscaFiltro handleOnChance={handleOnChance}/>
        
        <div id="container">
          {coursesFiltrados.map((course) => {
            return (
              <div className="card-courses">
                <h3>{course.nome}</h3>
                <p>Gênero:{course.genero}</p>
                
                <img src={course.img} alt="img" />
                <p>Descrição: {course.descricao}</p>
                <a href={course.link} target="_blank" rel="noopener noreferrer">Acesse aqui o canal</a>
                
              </div>
            );
          })}
        </div>
      </>
    );
  };
  export default Courses;