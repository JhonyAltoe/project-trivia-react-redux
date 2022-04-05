import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import logo from './trivia.png';
import Login from './page/Login';
import NotFound from './page/NotFound';
import Config from './page/Config';
import './App.css';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/configuracoes" component={ Config } />
      <Route path="*" component={ NotFound } />
    </Switch>
  );
}
