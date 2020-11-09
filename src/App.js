import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import './App.css';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PublicRoute path="/sign_up">
            <Signup />
          </PublicRoute>
          <PublicRoute path="/login">
            <Login />
          </PublicRoute>
          <PrivateRoute path="/">
            <Home />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
