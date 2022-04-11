import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './page/Login';
import NotFound from './page/NotFound';
import Config from './page/Config';
import GameScreen from './page/GameScreen';
import FeedBack from './page/FeedBack';
import Ranking from './page/Ranking';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/configuracoes" component={ Config } />
      <Route exact path="/gamescreen" component={ GameScreen } />
      <Route exact path="/feedback" component={ FeedBack } />
      <Route exact path="/ranking" component={ Ranking } />
      <Route path="*" component={ NotFound } />
    </Switch>
  );
}
