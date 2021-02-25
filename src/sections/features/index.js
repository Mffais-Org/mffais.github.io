import React, { Component } from 'react';
import { Star } from '../../components';
import { FeatureCard } from '../../components';
import style from './Features.module.scss';

const featureCards = [
  {
    title: 'Setup your Mffais account',
    text: 'Enter your bank balance and add all future incomes and expenses',
    imgUrl: '/img/illustration-1.svg',
  },
  {
    title: 'Focus on your future',
    text: 'Mffais will calculate your future money flow 365 days in advance.',
    text2:
      'We will tell you your lowest balance and how much money you’ll have after a year',
    imgUrl: '/img/illustration-2.svg',
  },
  {
    title: 'Clear your transactions',
    text:
      'After transactions clear your bank account, make sure to clear them from Mffais as well',
    imgUrl: '/img/illustration-3.svg',
  },
];

export default class Features extends Component {
  render() {
    const { featuresRef } = this.props;
    return (
      <section id="features" ref={ featuresRef }>
        <div className={ style.header }>
          <h1>Features</h1>
          <Star />
          <h2>
            Track your cash flow and get an insight into <br />
            future spending and savings
          </h2>
        </div>
        {featureCards.map((obj, index) => (
          <div key={ `featureCard${ index }` } className={ style.featureCard }>
            <FeatureCard { ...obj } imgIsLeft={ index % 2 == 1 } />
          </div>
        ))}
      </section>
    );
  }
}
