import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';

import './style/global.scss';
import './style/grid.scss';
import 'typeface-rubik';

import { Footer } from './components';
import HomePage from './pages/home';
import TermsAndConditionsPage from './pages/terms-and-conditions';
import PrivacyPolicy from './pages/privacy-policy';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/privacy-policy">
        <PrivacyPolicy />
      </Route>
      <Route path="/terms-and-conditions">
        <TermsAndConditionsPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
    <Footer />
  </Router>,
  document.getElementById('root')
);
