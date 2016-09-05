import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Status from './components/Status';
import Activity from './components/Activity';
import Sleep from './components/Sleep';
import Tests from './components/Tests';

// <Route path='/status' component={Status} />
// <Route path='/activity' component={Activity} />
// <Route path='/sleep' component={Sleep} />

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/tests' component={Tests} />
  </Route>
);
