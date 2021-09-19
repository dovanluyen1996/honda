import React, { Component } from "react";

// import "../assets/sass/all.scss";
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
              <ProductPC />
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
