import React, { Component } from 'react';
import "./Button.scss";


class Button extends Component {

	render() {
		return (
			<div>
				<button type="button" class="btn"><i class="fas fa-cart-plus"></i>Buy Now</button>
			</div>
		);
	}

	
}
export default Button;
