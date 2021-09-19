import React, { Component } from "react";
import Slide from "./Slide/Slide";
import Infor from "./Infor/Infor";
import Product from "./Product/Product";
import Card from "./Event/Card";


class Main extends Component {
  render() {
    return (      
        <main id="main">
          <div className="container">
            {/*-----Slide-----*/}
            <Slide />
            {/*-----Slide-----*/}
            <Infor />
            {/*-----Product-----*/}
            <section className="product">              
                <Product />
            </section>
            {/*-----Product-----*/}

            
          </div>
        </main>
    );
  }
}

export default Main;
