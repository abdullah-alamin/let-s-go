import React, {useState} from 'react'
import './App.css';
import Home from './component/Home/Home';
import Nav from './component/Nav/Nav';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginSignUp from './component/Login/LoginSignUp';
import PrivateRoute from './component/Signup/PrivateRoute'
import RideSetup from './component/RideSetup.js/RideSetup';
export const UserContext= React.createContext();
function App() {
  const [loggedUser, setLoggedUser]= useState({});
  return (
    <UserContext.Provider value={[loggedUser,setLoggedUser]}>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <PrivateRoute path='/transport/:name'>
          <Nav></Nav>
          <RideSetup></RideSetup>
        </PrivateRoute>
        <Route path='/login'>
          <Nav></Nav>
          <LoginSignUp></LoginSignUp>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
