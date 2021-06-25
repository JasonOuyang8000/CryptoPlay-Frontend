import React from "react";
import Header from 'components/Header/Header.js';
import Home from 'components/Home/Home.js';

import { 
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";



export default function App() {

  return (
    <BrowserRouter>
    <Header />

    <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">

        </Route>
       <Route exact path="/signup">
          
        </Route>
        <Route>
          
        </Route>
    </Switch>
   </BrowserRouter>
  );
}