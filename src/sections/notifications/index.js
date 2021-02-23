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
          <img className={ style.smiley } src="/img/smiley.svg" />
          <div>
            <h3 className="float-right">
              Due date <br />
              notifications <br />
              help you stay <br />
              on top of your <br />
              cash flow
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
