import React from 'react';
import { Star } from '../../components';
import style from './HowMuchToSpend.module.scss';

export default function () {
  return (
    <section className={ style.howMuchToSpend }>
      <div className="grid-three">
        <div className="col-text-with-image">
          <Star className={ style.star1 } />
          <h3>
            Mffais tells <br />
            you how much <br />
            to spend...
          </h3>
        </div>
        <div className={ `${ style.phone } col` }>
          <img src="/img/how-much-to-spend.svg" />
        </div>
        <div className="col-text-with-image">
          <Star className={ style.star2 } />
          <div className={ style.howMuchToSave }>
            <h3 className="float-right">
              ...or how much <br />
              to save to stay <br />
              in the black
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
