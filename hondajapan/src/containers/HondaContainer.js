import React, { Component } from "react";

import Honda from "./../component/Main/Product/ProductHonda/Honda";
import ProductHonda from "./../component/Main/Product/ProductHonda/ProductHonda";

import { connect } from "react-redux";

import PropTypes from "prop-types";

import  {actAddToCard} from "./../actions/index";


class HondaContainer extends Component {
  render() {
    var { productHonda } = this.props;
    return (
      <div>
          <Honda>
              {/*truyền dữ liệu dạng children*/}
              { this.showProductHonda(productHonda) }   
          </Honda>
      </div>
    );
  }

   //Honda
  showProductHonda(products) {
     var result = null;
     var onAddToCard = this.props;
     if (products.length > 0) {
        result = products.map((product,index) => {
           return <ProductHonda
                      key={index} 
                      product={product} 
                      onAddToCard = {onAddToCard}
                  />
        });
     }
     return result;
  }

}

//PropType dùng để kiểm tra dữ liệu nhập vào là dạng gì
HondaContainer.propTypes = {
    productHonda : PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
        })
    ).isRequired //nghĩa là yêu cầu phải có
}

const mapStateToProps = state => {
  return {
    productHonda : state.listProductHonda //first:productHonda
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
      onAddToCard: (product) =>{
          dispatch(actAddToCard(product, 1));
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (HondaContainer);
