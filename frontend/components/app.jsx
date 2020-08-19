import React from "react";
import GreetingContainer from './greeting/greeting_container';
import SignupContainer from './session_form/signup_form_container';
import LoginContainer from './session_form/login_form_container';
import { Route, Link } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
// comment here
const App = () => (
  <div>
    <header className="home-page">
      <a href="#" className="title">
        fakebook
      </a>
      <GreetingContainer />
    </header>
    <img className="home-img" src={window.images.logo}/>
    <h2 className="greeting-line">The best typo you've ever made.</h2>
    <body className="main-page">
      <AuthRoute path="/login" component={LoginContainer} />
      <AuthRoute path="/signup" component={SignupContainer} />
    </body>
    <footer></footer>
  </div>
);

export default App;