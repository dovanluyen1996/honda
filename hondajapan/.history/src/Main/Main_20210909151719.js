import React, { Component } from "react";
import Slide from "../component/Slide/Slide";
import Infor from "../component/Infor/Infor";
import ProductPC from "../component/Product/ProductPC/ProductPC";
import ProductSP from "../component/Product/ProductSP/ProductSP";

import "../assets/sass/all.scss";
class Main extends Component {
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
              <Route path="/productpc" component={ProductPC} />
              <Route path="/productsp" component={ProductSP} />
            </section>
            {/*-----Product-----*/}
          </div>
        </main>
        {/*------------Main------------*/}
      </div>
    );
  }
}

export default Main;
