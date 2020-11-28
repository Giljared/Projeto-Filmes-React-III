
import './Styles/global.css'
import Routes from './Routes/Routes'
//import Apresentacao from './Services/Apresentacao'

function App() {

  return (
    <div>   
      {/* <Apresentacao/>  */}
      <Routes/>  

    </div>   

    
  )
}

export default App;






















// import React from 'react';
// import Filmes from './Pages/Filmes';
// import Apresentacao from './Pages/Apresentacao';
// import Home from './Pages/Home';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import './Styles/global.css'

// function App() {
//   return (
//     <>
//     <BrowserRouter>
//       <Switch>
//       <Route exact path="/" render={ props => <Home {...props} /> }/>
//       <Route path="/filmes" render={ props => <Filmes {...props} /> }/>
//       <Route path="/apresentacao" render={ props => <Apresentacao {...props} /> }/>
//     </Switch>
//     </BrowserRouter>
//     </>
    

//   );
// }
  
// export default App
