import React, { Component } from "react";
import Header from "../component/Header/Header";
import Slide from "../component/Slide/Slide";
import Infor from "../component/Infor/Infor";
import ProductPC from "../component/Product/ProductPC/ProductPC";
import ProductSP from "../component/Product/ProductSP/ProductSP";
import Footer from "../component/Footer/Footer";

import "../assets/sass/all.scss";
class App extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default App;
