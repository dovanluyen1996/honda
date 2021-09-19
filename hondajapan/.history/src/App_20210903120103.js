import React, { Component } from "react";
import Header from "./component/Header/Header";
import Slide from "./component/Slide/Slide";
import Informain from "./component/Informain/InforMain";
import ProductPC from "./component/ProductPC/ProductPC";
import ProductSP from "./component/ProductSP/ProductSP";
import Footer from "./component/Footer/Footer";
import "./assets/css/style.css";

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

            <Informain />

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
