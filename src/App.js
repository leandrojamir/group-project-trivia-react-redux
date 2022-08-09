import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Settings from './pages/Settings';
import Game from './pages/Game';
import Feedback from './pages/Feedback';

export default function App() {
  return (
    <div>
      <Link to="/">Login</Link>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/settings" component={ Settings } />
        <Route exact path="/game" component={ Game } />
        <Route exact path="/feedback" component={ Feedback } />
      </Switch>
    </div>
  );
}
