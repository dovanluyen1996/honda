import React, { Component } from "react";

import Toyota from "./../component/Main/Product/ProductToyota/Toyota";
import ProductToyota from "./../component/Main/Product/ProductToyota/ProductToyota";

import { connect } from "react-redux";

import PropTypes from "prop-types";


class ToyotaContainer extends Component {
  render() {
    var { productToyota } = this.props;
    return (
          <div>
            <Toyota productToyota = { productToyota } />
         </div>
    );
  }


 

}

//PropType dùng để kiểm tra dữ liệu nhập vào là dạng gì
ToyotaContainer.propTypes = {
    productToyota : PropTypes.arrayOf(
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
     productToyota : state.listProductToyota  //first:productCha
  }
}


export default connect(mapStateToProps,null) (ToyotaContainer);
