import React, { useState } from "react";
import Home from 'components/Home/Home.js';
import Login from 'components/Login/Login.js';
import Signup from 'components/Signup/Signup.js';
import Loader from 'components/Loader/Loader.js';

import { 
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";



export default function App(props) {

  const {loaded, setLoaded} = useState(false);

  

  

  return (

    
    <BrowserRouter>
        {!loaded ? <Loader /> : null }
        <Switch>
          <Route exact path="/">
            <Home loaded={loaded} setLoaded={setLoaded}/>
          </Route>

    
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup/>
          </Route>
          <Route>
              
          </Route>
        </Switch>
   </BrowserRouter>
  );
}