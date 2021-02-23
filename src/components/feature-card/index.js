import React from 'react';
import style from './FeatureCard.module.scss';

export default function index({ title, text, text2, imgUrl, imgIsLeft }) {
  if (imgIsLeft) {
    return (
      <div className="grid-two opposite">
        <div className={ `col ${ style.colWithImg }` }>
          <img src={ imgUrl } />
        </div>
        <div className="col">
          <div className={ style.textBox }>
            <h2>{title}</h2>
            <p>{text}</p>
            {text2 && <p>{text2}</p>}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid-two">
      <div className="col">
        <div className={ style.textBox }>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
      <div className={ `col ${ style.colWithImg }` }>
        <img src={ imgUrl } />
      </div>
    </div>
  );
}
