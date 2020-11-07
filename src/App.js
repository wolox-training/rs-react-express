import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import PrivateRoute from './components/PrivateRoute';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute path="/home">
            <Home />
          </PrivateRoute>
          <Route path="/sign_up">
            <Signup />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
