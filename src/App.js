import React from 'react';
import './App.css';
import Login from './Login.js';
import Logout from './Logout.js';
import Home from './Home.js';
import AddTask from './AddTask.js';
import {BrowserRouter,Link,Switch,Route} from 'react-router-dom';
import Display from './Display.js';


function App(){
  return(
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/logout" component={Logout}></Route>
        <Route exact path="/addtask" component={AddTask}></Route>
        <Route exact path="/display" component={Display}></Route>


    </Switch>
    </BrowserRouter>
  )
}


export default App;