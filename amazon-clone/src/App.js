import React, {useEffect} from 'react';

import './App.css';
import Header from './components/Header';
import Home from './components/Home'
import Checkout from './components/Checkout'
import Login from './components/Login'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {auth} from "./firebase"
import {useStateValue} from "./components/StateProvider"

function App() { 
  const [{}, dispatch] = useStateValue();

  useEffect(() =>{

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  }, [])
  return (
    //BEM
    <Router>

      <div className="App">
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
