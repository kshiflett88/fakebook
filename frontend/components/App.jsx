import React from "react";
import NavBar from './navbar/navbar_container';
import SignupContainer from './session_form/signup_form_container';
import LoginContainer from './session_form/login_form_container';
import { Route, Link, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute  } from '../util/route_util';
import UserShowContainer from './user/user_show_container';
import UserIndexContainer from './user/user_index_container';
const App = () => (
  <div>
    <div className="home-container">
     
      <AuthRoute path="/" component={LoginContainer} />
      <AuthRoute path="/signup" component={SignupContainer} />
      <NavBar />
      <ProtectedRoute exact path="/users" component={UserIndexContainer} />
      <ProtectedRoute path="/users/:id" component={UserShowContainer}/>

    </div>
    
  </div>
);

export default App;