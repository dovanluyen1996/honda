import React, { Component } from "react";

import ProductToyota from "./ProductToyota";

class Toyota extends Component {
  
  render() {  

    var { productToyota }  = this.props;
    return (
      <main id="main">
        <div className="container">      
          <section className="product">
            <div class="product_name">
              <p>Toyota</p>
            </div>
            <div className="product-itemPC">
                   { this.showProductToyota( productToyota ) }
            </div>
          </section>
        </div>
      </main>
    );
  }


  //Toyota
  showProductToyota(products) {
     var result = null;
     if (products.length > 0) {
        result = products.map((productToyota,index) => {
           return <ProductToyota key={index} toyota={productToyota} />
        });
     }
     return result;
  }


}



export default Toyota;
