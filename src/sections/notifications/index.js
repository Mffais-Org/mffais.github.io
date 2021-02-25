import React from 'react';
import { Star } from '../../components';
import style from './Notifications.module.scss';

export default function () {
  return (
    <section className={ style.notifications }>
      <div className="grid-three">
        <div className={ `${ style.phone } col` }>
          <img src="/img/notifications-1.svg" />
        </div>
        <div className={ `${ style.phone } col` }>
          <img src="/img/notifications-2.svg" />
        </div>
        <div className="col-text-with-image">
          <div>
            <div className="float-right">
              <div className={ style.smiley }>
                <img src="/img/smiley.svg" />
              </div>
              <h3>
                Due date <br className={ style.phoneBr }/>
                notifications <br />
                help <br className={ style.phoneBr }/>you stay <br />
                on top of <br className={ style.phoneBr }/>your <br />
                cash flow
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
