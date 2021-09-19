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
        <main id="main">
          <div className="container">
            {/*-----Slide-----*/}

            <Route path="/slide" component={Slide} />
            {/*-----Slide-----*/}

            {/*-----Product-----*/}

            {/*-----Product-----*/}
          </div>
        </main>
        {/*------------Main------------*/}

        {/*------------Footer------------*/}
        <Footer />
        {/*------------Footer------------*/}
      </Router>
    );
  }
}

export default App;
