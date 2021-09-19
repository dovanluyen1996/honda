import React, { Component } from "react";
import { Link } from "react-router-dom";
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
                  <Link to="/">
                    <i className="fas fa-home" />
                  </=>
                </li>
                <li className="second">
                  <Link to="/productpc">ProductPC</=>
                </li>
                <li>
                  <Link to="/productsp">ProductSP</=>
                </li>
                <li>
                  <Link to="javascript:void(0)">事件情報</=>
                </li>
                <li>
                  <Link to="javascript:void(0)">事件情報</=>
                </li>
                <li>
                  <Link to="javascript:void(0)">県警の紹介</=>
                </li>
                <li>
                  <Link to="javascript:void(0)">手続・申請</=>
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
