import React, { Component } from "react";
import "./Product.scss";

import Images from "constants/Images";
import Button from "./Button/Button";



export class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productHonda: [
        {
          id: 1,
          image: Images.HONDA.HONDA1,
          info: "Ô TÔ HONDA",
          price: "1.500.000.000 Vnd",
          status: true,
        },
        {
          id: 2,
          image: Images.HONDA.HONDA2,
          info: "Ô TÔ HONDA",
          price: "1.500.000.000 Vnd",
          status: true,
        },
        {
          id: 3,
          image: Images.HONDA.HONDA3,
          info: "Ô TÔ HONDA",
          price: "1.500.000.000 Vnd",
          status: true,
        },
        {
          id: 4,
          image: Images.HONDA.HONDA4,
          info: "Ô TÔ HONDA",
          price: "1.500.000.000 Vnd",
          status: true,
        },
              
      ],

      productToyota: [
        {
          id: 1,
          image: Images.TOYOTA.TOYOTA1,
          info: "Ô TÔ TOYOTA",
          price: "1.500.000.000 Vnd",
          status: true,
        },
        {
          id: 2,
          image: Images.TOYOTA.TOYOTA2,
          info: "Ô TÔ TOYOTA",
          price: "1.500.000.000 Vnd",
          status: true,
        },
        {
          id: 3,
          image: Images.TOYOTA.TOYOTA3,
          info: "Ô TÔ TOYOTA",
          price: "1.500.000.000 Vnd",
          status: true,
        },
        {
          id: 4,
          image: Images.TOYOTA.TOYOTA4,
          info: "Ô TÔ TOYOTA",
          price: "1.500.000.000 Vnd",
          status: true,
        },
              
      ],
      productMercedes: [
        {
          id: 1,
          image: Images.MER.MER1,
          info: "Ô TÔ MERCEDES-BENZ",
          price: "1.500.000.000 Vnd",
          status: true,
        },
        {
          id: 2,
          image: Images.MER.MER2,
          info: "Ô TÔ MERCEDES-BENZ",
          price: "1.500.000.000 Vnd",
          status: true,
        },
        {
          id: 3,
          image: Images.MER.MER3,
          info: "Ô TÔ MERCEDES-BENZ",
          price: "1.500.000.000 Vnd",
          status: true,
        },
        {
          id: 4,
          image: Images.MER.MER4,
          info: "Ô TÔ MERCEDES-BENZ",
          price: "1.500.000.000 Vnd",
          status: true,
        },
              
      ],
    };
  }

  render() {
    // Gọi hàm hiển thị danh sách ProductHonda
    let elementProductHonda = this.state.productHonda.map((productHonda, index) => {
      if (productHonda.status) {
        return (
          <div className="item item-blue" key={index}>          
            <div className="item-image">
              <a href="javascript:voi(0)">
                <img src={productHonda.image} alt="" className="img" />
              </a>
            </div>
            <div className="item-infor">
              <h5>{productHonda.info}</h5>
            </div>
            <div className="item-infor">
              <h5>{productHonda.price}</h5>
            </div>

            {/* -----Icon----- */}
            <Button />
          </div>
        );
      }
    });

    // Gọi hàm hiển thị danh sách ProductToyota
    let elementProductToyota = this.state.productToyota.map((productToyota, index) => {
      if (productToyota.status) {
        return (
          <div className="item item-blue">          
            <div className="item-image">
              <a href="javascript:voi(0)">
                <img src={productToyota.image} alt="" className="img" />
              </a>
            </div>
            <div className="item-infor">
              <h5>{productToyota.info}</h5>
            </div>
            <div className="item-infor">
              <h5>{productToyota.price}</h5>
            </div>

            {/* -----Icon----- */}
            <Button />
          </div>
        );
      }
    });

    // Gọi hàm hiển thị danh sách ProductToyota
    let elementProductMercedes = this.state.productMercedes.map((productMercedes, index) => {
      if (productMercedes.status) {
        return (
          <div className="item item-blue">          
            <div className="item-image">
              <a href="javascript:voi(0)">
                <img src={productMercedes.image} alt="" className="img" />
              </a>
            </div>
            <div className="item-infor">
              <h5>{productMercedes.info}</h5>
            </div>
            <div className="item-infor">
              <h5>{productMercedes.price}</h5>
            </div>

            {/* -----Icon----- */}
            <Button />
          </div>
        );
      }
    });

    return (
      
        <div className="container">
          
          <section className="product">
           {/* --------HONDA--------*/}
            <div class="product_name">
              <p>Honda</p>
              <a href="/honda">Xem tất cả</a>
            </div>
            <div className="product-itemPC">{elementProductHonda}</div>

             {/* --------TOYOTA--------*/}
            <div class="product_name">
              <p>Toyota</p>
              <a href="/toyota">Xem tất cả</a>
            </div>
            <div className="product-itemPC">{elementProductToyota}</div>

             {/* --------MERCEDES--------*/}
             <div class="product_name">
              <p>Mercedes-Benz</p>
              <a href="javascript:void(0)">Xem tất cả</a>
            </div>
            <div className="product-itemPC">{elementProductMercedes}</div>
          </section>

        </div>
      
    );
  }
}




export default Product;
