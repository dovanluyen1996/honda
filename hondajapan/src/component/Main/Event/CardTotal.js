import React, { Component } from 'react';

class CardTotal extends Component {
	render() {
		var { card } = this.props;
		return (
			 <div className="total">
              <div className="total_content">
                <h3>Total:</h3>
                <p> { this.showCardTotal(card) }$ </p>
              </div>
              <button className="total_click">Buy Now</button>
          </div>
		);
	}

	showCardTotal = (card) => {
		var total = 0;
		if (card.length > 0) {
			for (var i=0; i < card.length ; i++ ) {
				total += card[i].product.price * card[i].quantity;
			}
		}

		return total;
	}
}
export default CardTotal;
