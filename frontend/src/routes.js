import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'

// import { Container } from './styles';

function Routes() {
  return(
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={Home}/>
            <Route exact path="/signin" component={Signin}/>
            <Route exact path="/signup" component={Signup}/>
        </Switch>
      </BrowserRouter>
  )    
}

export default Routes;