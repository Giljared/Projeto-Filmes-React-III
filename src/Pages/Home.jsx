import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
// import Perfil from "../Services/perfil"
import '../Styles/Pages/home.css';


function Home() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <main>
          <h1>Quer saber meus filmes favoritos?</h1>
          <p>Então, vem comigo! Cada um deles representa uma fase e emoções vividas.</p>

          <Link to="/sobre" >
            <button className="btn-1">Sobre mim</button>
          </Link>

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