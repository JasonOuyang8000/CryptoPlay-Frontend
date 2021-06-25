import React from "react";
import Home from 'components/Home/Home.js';
import Login from 'components/Login/Login.js';

import { 
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";



export default function App(props) {

  return (
    <BrowserRouter>


    

    <Switch>
  

      <>
    
        <Route exact path="/">
          <Home />
        </Route>
      </>
    
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">

      </Route>
      <Route>
          
      </Route>
    </Switch>
   </BrowserRouter>
  );
}