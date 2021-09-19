import React, { Component } from 'react';

class ProductHonda extends Component {
	render() {
		var { product } = this.props; //lấy props ra từ ProductContainer để hiển thị

		return (
			<div className="item item-blue">          
	            <div className="item-image">
	              <a href="javascript:voi(0)">
	                <img src={product.image} alt="" className="img" />
	              </a>
	            </div>
	            <div className="item-infor">
	              <h5>{product.name}</h5>
	            </div>

	            <div className="item-infor">
	              <h5>{product.price}$</h5>
	            </div>

	            <ul className="rating">
	            	<li>	            		
	            		{ this.showRatings(product.rating) }
	            	</li>
	            </ul>
	            {/* -----Icon----- */}
	            <button 
		            type="button" 
		            className="btn" 
		            onClick= { () => this.onAddToCard(product) } 
	            > 
	            <i class="fas fa-cart-plus"></i>Buy Now</button>
          	</div>       	
		);
	}

	onAddToCard = (product) => {
		this.props.onAddToCard(product);
	}



	//kiem tra rating,rating tối đa là 5
	showRatings(rating){
		var result = []
		for(var i=1 ; i <= rating;i++) {
			result.push(<i key={i} class="fas fa-star"></i>)
		}
		for(var j=1 ; j <=( 5-rating) ;j++) {
			result.push(<i key={j+i} class="far fa-star"></i>)
		}
		return result;
		
	}


}
export default ProductHonda;
