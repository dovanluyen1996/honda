import React, { Component } from "react";
import Images from "../../../constants/Images";
import Icon from "../Product_Icon/Icon";
import "./ProductSP.scss";
export class ProductSP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [
        {
          id: 1,
          title: "東京オートサロン開幕！ここにお知らせ文章が入ります。",
          background_title: "#4cbeee",
          color_triangle: "#4cbeee",
          image: Images.PRODUCT_SP.SP_IMG1,
          image_line: "images/icon/line.png",
          info: "東京オートサロン開幕！ここにお知らせ文章が入ります。30W程度東京オートサロン開幕！ここにお知らせ文章が入りま",
          status: true,
        },
        {
          id: 2,
          title: "東京オートサロン開幕！ここにお知らせ文章が入ります。",
          background_title: "#fdbc4c",
          color_triangle: "#fdbc4c",
          image: Images.PRODUCT_SP.SP_IMG2,
          image_line: "images/icon/line.png",
          info: "東京オートサロン開幕！ここにお知らせ文章が入ります。30W程度東京オートサロン開幕！ここにお知らせ文章が入りま",
          status: true,
        },
        {
          id: 3,
          title: "東京オートサロン開幕！ここにお知らせ文章が入ります。",
          background_title: "#7070db",
          color_triangle: "#7070db",
          image: Images.PRODUCT_SP.SP_IMG3,
          image_line: "images/icon/line.png",
          info: "東京オートサロン開幕！ここにお知らせ文章が入ります。30W程度東京オートサロン開幕！ここにお知らせ文章が入りま",
          status: true,
        },
        {
          id: 4,
          title: "東京オートサロン開幕！ここにお知らせ文章が入ります。",
          background_title: "#b7dc4c",
          color_triangle: "#b7dc4c",
          image: Images.PRODUCT_SP.SP_IMG4,
          image_line: "images/icon/line.png",
          info: "東京オートサロン開幕！ここにお知らせ文章が入ります。30W程度東京オートサロン開幕！ここにお知らせ文章が入りま",
          status: true,
        },
        {
          id: 5,
          title: "東京オートサロン開幕！ここにお知らせ文章が入ります。",
          background_title: "#f44ca7",
          color_triangle: "#f44ca7",
          image: Images.PRODUCT_SP.SP_IMG5,
          image_line: "images/icon/line.png",
          info: "東京オートサロン開幕！ここにお知らせ文章が入ります。30W程度東京オートサロン開幕！ここにお知らせ文章が入りま",
          status: true,
        },
        {
          id: 6,
          title: "東京オートサロン開幕！ここにお知らせ文章が入ります。",
          background_title: "#4cbbbc",
          color_triangle: "#4cbbbc",
          image: Images.PRODUCT_SP.SP_IMG6,
          image_line: "images/icon/line.png",
          info: "東京オートサロン開幕！ここにお知らせ文章が入ります。30W程度東京オートサロン開幕！ここにお知らせ文章が入りま",
          status: true,
        },
        {
          id: 7,
          title: "東京オートサロン開幕！ここにお知らせ文章が入ります。",
          background_title: "#f44c4c",
          color_triangle: "#f44c4c",
          image: Images.PRODUCT_SP.SP_IMG7,
          image_line: "images/icon/line.png",
          info: "東京オートサロン開幕！ここにお知らせ文章が入ります。30W程度東京オートサロン開幕！ここにお知らせ文章が入りま",
          status: true,
        },
        {
          id: 8,
          title: "東京オートサロン開幕！ここにお知らせ文章が入ります。",
          background_title: "#4cbeee",
          color_triangle: "#4cbeee",
          image: Images.PRODUCT_SP.SP_IMG8,
          image_line: "images/icon/line.png",
          info: "東京オートサロン開幕！ここにお知らせ文章が入ります。30W程度東京オートサロン開幕！ここにお知らせ文章が入りま",
          status: true,
        },
      ],
    };
  }

  render() {
    // Gọi hàm hiển thị danh sách Product
    let elementProduct = this.state.product.map((product, index) => {
      if (product.status) {
        return (
          <div className="item item-blue">
            <div
              className="item-title"
              style={{ backgroundColor: product.background_title }}
            >
              <h2>{product.title}</h2>
            </div>
            <div className="item-image">
              <a href="javascript:voi(0)">
                <img src={product.image} alt="" className="img" />
                <div
                  className="triangle_down"
                  style={{ borderTopColor: product.color_triangle }}
                />
                <img src={product.image_line} className="img-line" />
              </a>
            </div>
            <div className="item-infor">
              <h5>{product.info}</h5>
            </div>

            {/* -----Icon----- */}
            <Icon />
          </div>
        );
      }
    });

    return <div className="product-itemSP">{elementProduct}</div>;
  }
}

export default ProductSP;
