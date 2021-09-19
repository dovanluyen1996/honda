import React, { Component } from 'react';
import "./Card.scss";

class CardItem extends Component {
  

  render() {

    var { item } = this.props;
    return (    
    
      
          <div className="item">
              <div className="buttons">
                <span className="delete-btn"><i class="fas fa-trash-alt"></i></span>
                <span className="like-btn"><i class="fas fa-heart"></i></span>
              </div>
              <div className="image">
                <img src={item.product.image} alt="" />
              </div>
              <div className="description">
                <span>{ item.product.name }</span>
                <span>{ item.product.colorname }</span>
              </div>
              <div className="quantity">
                <button className="plus-btn" type="button" name="button">
                  <i class="fas fa-plus"></i>
                </button>
                  <span className="number">{ item.quantity }</span>
                <button className="minus-btn" type="button" name="button">
                  <i class="fas fa-minus"></i>
                </button>
              </div>
           
              <div className="price">{ item.product.price }</div>     
              <div className="price">{ this.showSubTotal( item.product.price,item.quantity ) }$</div>     
          </div>         
         
      
      
    );
  }

  showSubTotal = (price,quantity) => {
      return price*quantity;
  }


}
export default CardItem;


