import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import Slide from "./component/Slide/Slide";
import ProductPC from "./component/Product/ProductPC/ProductPC";
import ProductSP from "./component/Product/ProductSP/ProductSP";
import Footer from "./component/Footer/Footer";
import Main from "./Main/Main";

import "./assets/sass/all.scss";
class App extends Component {
  render() {
    return (
      <Router>
        {/*------------Header-----------*/}
        <Header />
        {/*------------Header------------*/}

        {/*------------Main------------*/}
        <Route exact path="/" component={Main} />

        {/*-----Product-----*/}
        <Route path="/productpc" component={ProductPC} />
        <Route path="/productsp" component={ProductSP} />
        {/*-----Product-----*/}

        {/*------------Footer------------*/}
        <Footer />
        {/*------------Footer------------*/}
      </Router>
    );
  }
}

export default App;
