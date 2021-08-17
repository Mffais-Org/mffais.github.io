import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';

import './style/global.scss';
import './style/grid.scss';
import 'typeface-rubik';

import { Footer, PrivacyAndTerms, Navbar } from './components';
import HomePage from './pages/home';
import PrivacyPolicy from './pages/privacy-policy';

function App() {
  const [ privacyPolicy, setPrivacyPolicy ] = useState([]);
  const [ termsAndConditions, setTermsAndConditions ] = useState([]);

  const getData = (url, setData) => {
    fetch(`/data/${ url }.json`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }).then(async (response) => {
      setData(await response.json());
    });
  };

  useEffect(() => {
    getData('privacy-policy', setPrivacyPolicy);
    getData('terms-and-conditions', setTermsAndConditions);
  }, []);

  return (
    <Router>
      <Switch>
        <Route path={ 'mffais.github.io/mffais.com/privacy-policy' }>
          <Navbar />
          {/* <PrivacyAndTerms data={privacyPolicy} title="Mffais Privacy Policy" /> */}
          <PrivacyPolicy />
        </Route>
        <Route path="/terms-and-conditions">
          <Navbar />
          <PrivacyAndTerms
            data={ termsAndConditions }
            title="Mffais Terms and Conditions"
          />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
