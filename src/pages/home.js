import React, { useRef } from 'react';
import { Navbar, Banner } from '../components';
import Home from '../sections/home';
import Features from '../sections/features';
import MoneyFlow from '../sections/moneyFlow';
import HowMuchToSpend from '../sections/howMuchToSpend';
import Notifications from '../sections/notifications';

export default function () {
  const featuresRef = useRef();
  const moneyFlowRef = useRef();

  return (
    <>
      <Navbar featuresRef={ featuresRef } moneyFlowRef={ moneyFlowRef } />
      <Home />
      <Features featuresRef={ featuresRef } />
      <HowMuchToSpend />
      <MoneyFlow moneyFlowRef={ moneyFlowRef } />
      <Notifications />
      <Banner />
    </>
  );
}
