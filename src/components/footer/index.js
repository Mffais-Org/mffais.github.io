import React from 'react';
import style from './Footer.module.scss';
import { GooglePlay, AppStore } from '../../components';
import { HashLink as Link } from 'react-router-hash-link';

export default function () {
  return (
    <>
      <div className={ style.subFooter }>
        <h4>Give it a try!</h4>
        <div className={ style.footerLogoWrapper } >
          <GooglePlay />
          <AppStore />
        </div>
        <h4>Have any questions?</h4>
        <a
          className={ `button ${ style.contactSupport }` }
          target="_blank"
          href="mailto: support@mffais.com"
        >
          Contact support
        </a>
      </div>
      <footer>
        <div className={ style.nav }>
          <Link to="/#">
            <img src="/img/logo.svg" />
          </Link>
          <Link to="/#features">Features</Link>
          <Link to="/#moneyFlow">Money flow</Link>
          <Link to="/privacy-policy/#">Privacy Policy</Link>
          <Link to="/terms-and-conditions/#">Terms and conditions</Link>
        </div>
        <div className={ style.contactInfo }>
          <p>2436 E 4th Street, Ste #336</p>
          <p>Long Beach, CA 90814</p>
          <p><a href="mailto:support@mffais.com">support@mffais.com</a></p>
          <p>844-463-3247 / 844-4-MFFAIS (USA)</p>
        </div>
      </footer>
    </>
  );
}
