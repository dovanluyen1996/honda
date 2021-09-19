import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./component/Header/Header";
import Slide from "./component/Slide/Slide";
import Infor from "./component/Infor/Infor";
import ProductPC from "./component/ProductPC/ProductPC";
import ProductSP from "./component/ProductSP/ProductSP";
import Footer from "./component/Footer/Footer";

import "./assets/sass/all.scss";
class App extends Component {
  render() {
    return (
      <Fragment>  
        {/*------------Header-----------*/}
        <Header />
        {/*------------Header------------*/}

        {/*------------Main------------*/}
        <main id="main">
          <div className="container">
            {/*-----Slide-----*/}
            <Slide />
            {/*-----Slide-----*/}

            <Infor />

            {/*-----Product-----*/}
            <section className="product">
              <ProductPC />
              <ProductSP />
            </section>
            {/*-----Product-----*/}
          </div>
        </main>
        {/*------------Main------------*/}

        {/*------------Footer------------*/}
        <Footer />
        {/*------------Footer------------*/}
      </div>
    );
  }
}

export default App;
