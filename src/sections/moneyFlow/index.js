import React, { Component } from 'react';
import style from './MoneyFlow.module.scss';

export default class MoneyFlow extends Component {
  render() {
    const { moneyFlowRef } = this.props;
    return (
      <section id="moneyFlow" className={ style.moneyFlow } ref={ moneyFlowRef }>
        <div className={ style.header }>
          <h1>Money flow</h1>
          <div className={ style.nonMobile }>
            <p>A single place where users can edit and checkout</p>
            <p>their future transactions - up to a year in the future.</p>
            <p>
              Due transactions are marked automatically to reduce cognitive
              load.
            </p>
          </div>
          <div className={ style.mobile }>
            <p>
              A single place where users can edit and check out their future
              transactions — up to a year in the future. Due transactions are
              marked automatically to reduce cognitive load.
            </p>
          </div>
        </div>

        <div className={ `grid-two-even ${ style.cards }` }>
          <MoneyFlowCard />
          <MoneyFlowCard isCardSecond={ true } />
          <div className={ style.circle }></div>
        </div>
      </section>
    );
  }
}

const MoneyFlowCard = ({ isCardSecond }) => {
  const createRow = (imgUrl, title, date, amount, isReceived = false) => {
    return (
      <div className={ style.row }>
        <span>{isReceived && <img src="/img/check.svg" />}</span>
        <div>
          <p>
            <img src={ `/img/${ imgUrl }.svg` } /> {title}
          </p>
          <p className={ style.grayText }>{date}</p>
        </div>
        <div className={ style.money }>
          <p>{amount}</p>
          {isReceived && <p className={ style.received }>Received</p>}
        </div>
      </div>
    );
  };

  return (
    <div className={ `${ style.col } col` }>
      <div className={ style.card }>
        <p className={ style.cardTopText }>
          <span>Dec 4 - Dec 5</span>
          <span>$1,100.00</span>
        </p>
        {createRow('up', 'Paycheck', 'Dec 4th, Mon', '$500.00', !!isCardSecond)}
        {createRow('down', 'Paycheck', 'Dec 10th, Tue', '-$400.00')}
        <p className={ style.grayText }>Period total $100.00</p>
      </div>
    </div>
  );
};
