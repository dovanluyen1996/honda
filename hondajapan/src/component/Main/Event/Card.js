import React, { Component } from 'react';
import CardItem from "./CardItem";

class Card extends Component {
	render() {
		var { children } = this.props;
		return (
			<div className="shopping-cart">
	         	<div className="title">
	            	Shopping Bag
	          	</div>
				{ children }
			</div>
		);
	}
}
export default Card;
