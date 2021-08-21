import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Login from './Login';
  import DashBoard from './DashBoard';


function RouterPage(){

    return (
        <>
            <Router>
                <Route path="/" exact component={Login}/>
                <Route path="/Dashboard" component={DashBoard}/>
            </Router>
        </>
    )
}

export default RouterPage