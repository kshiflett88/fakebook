import React from "react";
import GreetingContainer from './greeting/greeting_container';
import SignupContainer from './session_form/signup_form_container';
import LoginContainer from './session_form/login_form_container';
import { Route, Link } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
// comment here
const App = () => (
  <div>
    <div className="home-container">
     
      <AuthRoute path="/" component={LoginContainer} />
      <GreetingContainer />

    </div>
    <body>
      <AuthRoute path="/signup" component={SignupContainer} />
    </body>
    
  </div>
);

export default App;