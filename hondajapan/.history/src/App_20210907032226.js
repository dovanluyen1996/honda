import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import Slide from "./component/Slide/Slide";
import Infor from "./component/Infor/Infor";
import ProductPC from "./component/Product/ProductPC/ProductPC";
import ProductSP from "./component/Product/ProductSP/ProductSP";
import Footer from "./component/Footer/Footer";
import home from "./page/home";

import "./assets/sass/all.scss";
class App extends Component {
  render() {
    return (
      <Router>
        {/*------------Header-----------*/}
        <Header />
        {/*------------Header------------*/}

        {/*------------Main------------*/}
        <Route path="/" component={home} />
        <main id="main">
          <div className="container">
            {/*-----Slide-----*/}

            <Route path="/slide" component={Slide} />
            {/*-----Slide-----*/}

            <Infor />

            {/*-----Product-----*/}
            <section className="product">
              <Route path="/productpc" component={ProductPC} />
              <Route path="/productsp" component={ProductSP} />
            </section>
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
