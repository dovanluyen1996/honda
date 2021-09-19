import * as types from "./../constants/ActionTypes";


export const actAddToCard = (product,quantity) => {
	return {
		type: types.ADD_TO_CARD,
		product,   //product:product
		quantity	//quantity:quantity
	}
}