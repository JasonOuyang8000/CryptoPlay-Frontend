import React, { useState } from "react";
import Home from 'components/Home/Home.js';
import Login from 'components/Login/Login.js';
import Signup from 'components/Signup/Signup.js';
import Loader from 'components/Loader/Loader.js';
import SingleCrypto from 'components/SingleCrypto/SingleCrypto.js';
import { 
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";



export default function App(props) {

  const [loaded, setLoaded] = useState(false);

 


  

  return (

    
    <BrowserRouter>
        {!loaded && <Loader />}
        <Switch>
          <Route exact path="/cryptos/:id">
              
              <SingleCrypto/>
          </Route>
          <Route exact path="/">
            <Home setLoaded={setLoaded}/>
          </Route>
          <Route  path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
        
        </Switch>
   </BrowserRouter>
  );
}