// import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../Pages/Home';
import Filmes from '../Pages/Filmes';
import Perfis from '../Pages/Perfis';
import Course from "../Pages/Courses";
import Bootcamp from "../Pages/Bootcamps";


function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>                
                <Route path="/filmes" component={Filmes}/>
                <Route path="/perfis" component={Perfis}/> 
                <Route path="/course" component={Course}/>
                <Route path="/bootcamp" component={Bootcamp}/>

            </Switch>   
        </BrowserRouter>
    );
};

export default Routes;