import React, { Component } from "react";


class Honda extends Component {
  
  render() {  

    var { productHonda }  = this.props;
    return (
      <main id="main">
        <div className="container">          
          <section className="product">
            <div class="product_name">
              <p>Honda</p>
            </div>
            <div className="product-itemPC">
                   { this.props.children }
            </div>
          </section>
        </div>
      </main>
    );
  }

}


export default Honda;
