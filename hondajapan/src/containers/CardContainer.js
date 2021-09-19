import React, { Component } from "react";

import { connect } from "react-redux";

import PropTypes from "prop-types";

import Card from "./../component/Main/Event/Card";
import CardItem from "./../component/Main/Event/CardItem";
import CardTotal from "./../component/Main/Event/CardTotal";
import * as Message from "./../constants/Message";


class CardContainer extends Component {
 
  render() {
    var { card } = this.props;
    return (
          <Card>
             { this.showCardItem(card) }
             { this.showCardTotal(card) }
          </Card>
    );
    
  }

  showCardItem = (card) => {
        var result = Message.MSG_CARD_EMPTY;
        
        if (card.length>0) {
          result = card.map((item,index) =>{
                return (
                    <CardItem 

                      key = { index }
                      item = { item }

                    />
                );

          })
        }
        return result;
  }

  showCardTotal = (card) => {
      var result=null;
      if (card.length > 0) {
          result = <CardTotal card={card} />
      }
      return result;
  }

  


}

//PropType dùng để kiểm tra dữ liệu nhập vào là dạng gì
CardContainer.propTypes = {
    Card : PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
        }).isRequired,
        quantity : PropTypes.number.isRequired    
    })).isRequired //nghĩa là yêu cầu phải có
}

const mapStateToProps = state =>{
  return {
    card : state.Card
  }

}



export default connect(mapStateToProps,null) (CardContainer);
