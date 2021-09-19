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
              <Link to="/login" className="login">Đăng Nhập</Link>
          <Link className="cartAll" to="javascript:void(0)"><i class="fas fa-cart-arrow-down"></i></Link>
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
                  </Link>
                </li>
                <li className="second">
                  <Link to="/honda">Honda</Link>
                </li>
                <li>
                  <Link to="/toyota">Toyota</Link>
                </li>
                <li>
                  <Link to="javascript:void(0)">Tin Tức</Link>
                </li>
                <li>
                  <Link to="javascript:void(0)">Giới Thiệu</Link>
                </li>
                <li>
                  <Link to="javascript:void(0)">Liên Hệ</Link>
                </li>
                <li>
                  <Link to="javascript:void(0)">Bản Đồ</Link>
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
