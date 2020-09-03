import React from 'react';
import './App.css';
import Login from './Login.js';
import Logout from './Logout.js';
import Admin from './Admin.js';
import Hello from './Hello.js';
import {BrowserRouter,Link,Switch,Route} from 'react-router-dom'
import Demo from './Demo.js'


function App(){
  return(
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/admin" component={Admin}></Route>
        <Route exact path="/logout" component={Logout}></Route>
        <Route exact path="/addtask" component={Hello}></Route>
        <Route exact path="/demo" component={Demo}></Route>


    </Switch>
    </BrowserRouter>
  )
}


export default App;