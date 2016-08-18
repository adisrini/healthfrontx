import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Status from './components/Status';

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/status' component={Status} />
  </Route>
);
