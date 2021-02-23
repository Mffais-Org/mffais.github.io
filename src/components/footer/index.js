import React from 'react';
import style from './Footer.module.scss';
import { GooglePlay } from '../../components';
import { HashLink as Link } from 'react-router-hash-link';

export default function () {
  return (
    <>
      <div className={ style.subFooter }>
        <h4>Give it a try!</h4>
        <GooglePlay />
        <h4>Have any questions?</h4>
        {/* TODO: Add your email instead of abc@example.com */}
        <a className="button"href="mailto: abc@example.com">Contact support</a>
      </div>
      <footer>
        <Link to="#home">
          <img src="/img/logo.svg" />
        </Link>
        <Link to="/#features">Features</Link>
        <Link to="/#moneyFlow">Money flow</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms-and-conditions">Terms and conditions</Link>
      </footer>
    </>
  );
}
