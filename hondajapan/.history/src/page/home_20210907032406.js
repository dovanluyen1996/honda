import React, { Component } from "react";
import Header from "../component/Header/Header";
import Slide from "../component/Slide/Slide";
import Infor from "../component/Infor/Infor";
import ProductPC from "../component/Product/ProductPC/ProductPC";
import ProductSP from "../component/Product/ProductSP/ProductSP";

import "../../assets/sass/all.scss";
import Footer from "../component/Footer/Footer";
class App extends Component {
  render() {
    return (
      <div>
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
