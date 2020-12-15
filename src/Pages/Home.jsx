import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Perfis from "../Services/perfis"
import '../Styles/Pages/home.css';


function Home() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <main>
          <h1>Favorites times for me</h1>

          <div className="video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/CZneEDUHdZI" frameborder="0" allow="accelerometer autoplay clipboard-write encrypted-media gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          
          <div>
          <Link to="/perfis" >
            <button className="btn-1">My Profile</button>
          </Link>

          <Link to="/course" >
            <button className="btn-2">Course</button>
          </Link>

          <Link to="/bootcamp" >
            <button className="btn-3">Programação</button>
          </Link>
          </div>
          <div className="video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/NA4srP35Maw" frameborder="0" allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture" allowfullscreen></iframe>
          </div>
          

        </main>

        
        <Link to="/filmes" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0 , 0, 0.6)" />
        </Link>
       
        
      </div>
    </div>
  );
}

export default Home;























// import React, { Component } from 'react'
// import NavegacaoHome from '../Components/NavegacaoHome'

// class Home extends Component{
//     render () {
//         return(
//             <div>
//                 <NavegacaoHome/>
//             </div>
//         )
//     }

// }

// export default Home