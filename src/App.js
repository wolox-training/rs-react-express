import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Route from './components/Route';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home';
import Books from './screens/Books';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/sign_up">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/books/:id" isPrivate>
            <Books />
          </Route>
          <Route path="/books" isPrivate>
            <Redirect to="/" />
          </Route>
          <Route path="/" isPrivate>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
