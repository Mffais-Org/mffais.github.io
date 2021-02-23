import React from 'react';
import style from './Banner.module.scss';

export default function () {
  return (
    <div className={ `${ style.banner } flex-container` }>
      <img src="/img/cash-flow.svg" />
      <h3>
        Track your cash flow and get an insight into future spending and
        savings.
      </h3>
    </div>
  );
}
