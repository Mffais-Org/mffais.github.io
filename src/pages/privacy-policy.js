import React from 'react';
import { Navbar, PrivacyAndTerms } from '../components';

export default function () {
    return (
      <>
        <Navbar />
        <PrivacyAndTerms url="privacy-policy.json" title="Mffais Privacy Policy"/>
      </>
  );
}
