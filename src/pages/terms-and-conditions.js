import React from 'react';
import { Navbar, PrivacyAndTerms } from '../components';

export default function () {
  return (
    <>
      <Navbar />
      {/* TODO: Add data to the terms-and-conditions.json */}
      <PrivacyAndTerms url="terms-and-conditions.json" title="Mffais Terms and Conditions"/>
    </>
  );
}
