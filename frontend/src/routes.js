import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';

// import { Container } from './styles';

function Routes() {
  return(
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>

            <RedirectSignIn exact path="/signup" component={Signup}/>
            <RedirectSignIn exact path="/signin"/>
            <RedirectRoute path="/" />
        </Switch>
      </BrowserRouter>
  )    
}
const RedirectSignIn = ({ component: Component, ...rest }) =>{
  return(
    <Route {...rest}
    render={ props =>
      localStorage.auth ?(
      <Redirect to={{pathname: "/dashboard", state: { from: props.location}}}/>
      ):(
        <Switch>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/signin" component={Signin}/>
        </Switch>
      )


    }
    />
  )
}

const RedirectRoute = ({ component: Component, ...rest }) =>{
  return(
    <Route { ...rest }
        render={props =>
        
        localStorage.getItem('auth') ? (
        <PrivateRoutes {...props}/>
        ):(
        <Redirect to={{pathname: "/signin", state: { from: props.location}}}/>
        )
      }
      />
  )
}

const PrivateRoutes = ({component: Component, ...rest}) =>(
  <BrowserRouter>
    <Switch>
      <Route exact path='/dashboard' component={Dashboard} />
    </Switch>
  </BrowserRouter>
);

export default Routes;