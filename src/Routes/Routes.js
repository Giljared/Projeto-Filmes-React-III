import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../Pages/Home'
import Filmes from '../Pages/Filmes'
import Apresentacao from '../Pages/Apresentacao';


function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>                
                <Route path="/filmes" component={Filmes}/>
                {/* <Route path="/apresentecao" component={Apresentacao}/>     */}
            </Switch>   
        </BrowserRouter>
    )
}

export default Routes;