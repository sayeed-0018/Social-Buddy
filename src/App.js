import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import NoMatch from './component/NoMatch/NoMatch';
import FriendDetail from './component/FriendDetail/FriendDetail';


function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/home">
        <Home></Home>
        </Route>
        <Route path="/friend/:friendId">
        <FriendDetail></FriendDetail>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="*">
            <NoMatch />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
