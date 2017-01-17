import Offline from 'offline-plugin/runtime';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match } from 'react-router';

import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Header from './components/Header';

Offline.install();

export const Root = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Match exactly pattern="/" component={Home} />
      <Match exactly pattern="/signup" component={Signup} />
      <Match exactly pattern="/login" component={Login} />
    </div>
  </BrowserRouter>
);

if (!module.hot) render(<Root />, document.querySelector('react'));
