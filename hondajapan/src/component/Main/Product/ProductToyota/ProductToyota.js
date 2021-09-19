import React, { Component } from 'react';
import Button from "../Button/Button";

class ProductToyota extends Component {
	render() {
		var { toyota } = this.props; //lấy props ra từ ProductContainer để hiển thị
		return (
		<div>
			<div className="item item-blue">          
	            <div className="item-image">
	              <a href="javascript:voi(0)">
	                <img src={toyota.image} alt="" className="img" />
	              </a>
	            </div>
	            <div className="item-infor">
	              <h5>{toyota.name}</h5>

	            <div className="item-infor">
	              <h5>{toyota.price}$</h5>
	            </div>

	            <ul className="rating">
	            	<li>	            		
	            		{ this.showRatings(toyota.rating) }
	            	</li>
	            </ul>
	            {/* -----Icon----- */}
	            <Button />
          	</div>
          </div>
        </div>
          	
		);
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
export default ProductToyota;
