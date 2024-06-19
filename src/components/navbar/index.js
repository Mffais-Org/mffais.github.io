import React, { Component } from "react";
import style from "./Navbar.module.scss";
import { HashLink as Link } from "react-router-hash-link";
import { GooglePlay } from "../";

export default class Navbar extends Component {
  state = {
    viewing: "home",
  };
  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
    // this.setState({ featuresOffset: featuresRef?.current?.offsetTop, moneyFlowOffset: moneyFlowRef?.current?.offsetTop })
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  onScroll = (event) => {
    const { featuresRef, moneyFlowRef } = this.props;
    const featuresOffset = featuresRef?.current?.offsetTop;
    const moneyFlowOffset = moneyFlowRef?.current?.offsetTop;

    if (window.pageYOffset + 100 > moneyFlowOffset) {
      this.setState({ viewing: "moneyFlow" });
    } else if (window.pageYOffset + 50 > featuresOffset) {
      this.setState({ viewing: "features" });
    } else {
      this.setState({ viewing: "home" });
    }
  };

  render = () => {
    const { viewing } = this.state;
    return (
      <>
        <nav className={style.nav}>
          <Link to="/#">
            <img src="/img/logo.svg" />
            <img src="/img/logo-phone.svg" />
          </Link>
          <div className={`${style.links} ${style[viewing]}`}>
            <Link to="/#features">Features</Link>
            <Link to="/#moneyFlow">Money flow</Link>
            <Link to="/appGuide">App guide</Link>
          </div>
          <GooglePlay text="Get the App" />
        </nav>
        <div className={style.navPlaceholder}></div>
      </>
    );
  };
}
