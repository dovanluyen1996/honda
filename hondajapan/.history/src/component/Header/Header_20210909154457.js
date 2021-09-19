import React, { Component } from "react";
import Images from "../../constants/Images";

import "./Header.scss";

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="header-top">
          <div className="container">
            <div className="header-logo">
              <img src={Images.LOGO_PC} className="logoPC" />
              <img src={Images.LOGO_SP} className="logoSP" />
            </div>
          </div>
        </div>

        <div className="toogle">
          <i className="fas fa-bars" />
        </div>
        <div className="header-menu">
          <div className="container">
            <nav className="menu">
              <ul>
                <li className="first">
                  <a href="/">
                    <i className="fas fa-home" />
                  </a>
                </li>
                <li className="second">
                  <a href="/productpc">ProductPC</a>
                </li>
                <li>
                  <a href="/productsp">ProductSP</a>
                </li>
                <li>
                  <a href="javascript:void(0)">事件情報</a>
                </li>
                <li>
                  <a href="javascript:void(0)">事件情報</a>
                </li>
                <li>
                  <a href="javascript:void(0)">県警の紹介</a>
                </li>
                <li>
                  <a href="javascript:void(0)">手続・申請</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
