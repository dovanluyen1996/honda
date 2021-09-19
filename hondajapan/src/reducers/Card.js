import Images from "constants/Images";
import * as types from './../constants/ActionTypes';

var data = JSON.parse(localStorage.getItem('CARD'));

// nếu data tồn tại thì lấy data ngược lại thì nó lấy array rỗng
var initState = [
	{
		product : {
			id : 1,
			image: Images.HONDA.HONDA1,
			name: "HonDa 2018",
			price: 10000,
			rating: 4,
		},
		quantity : 5
	},
	{
		product : {
			id : 2,
			image: Images.HONDA.HONDA3,
			name: "HonDa 2018",
			price: 1000,
			rating: 5,
		},
		quantity : 3
	},
	{
		product : {
			id : 3,
			image: Images.HONDA.HONDA4,
			name: "HonDa 2018",
			price: 1000,
			rating: 5,
		},
		quantity : 5
	},
];   

const Card = (state = initState,action) => {
	switch (action.type) {
		case types.ADD_TO_CARD:
			console.log(action);
			return [...state];

		default : return [...state];
	}
}

export default Card;