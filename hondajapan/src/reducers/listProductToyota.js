import Images from "constants/Images";

var initState = {
	productToyota: [
		{
			id : 1,
			image: Images.TOYOTA.TOYOTA1,
			name: "Toyota 2018",
			price: 12000,
			rating: 4,
		},
		{
			id : 2,
			image: Images.TOYOTA.TOYOTA2,
			name: "Toyota 2019",
			price: 50000,
			rating: 5,
		},
		{
			id : 3,
			image: Images.TOYOTA.TOYOTA3,
			name: "Toyota 2020",
			price: 30000,
			rating: 3,
		},
		{
			id : 4,
			image: Images.TOYOTA.TOYOTA4,
			name: "Toyota 2021",
			price: 900000,
			rating: 5,
		},
		{
			id : 5,
			image: Images.TOYOTA.TOYOTA2,
			name: "Toyota 2019",
			price: 50000,
			rating: 5,
		},
		{
			id : 6,
			image: Images.TOYOTA.TOYOTA3,
			name: "Toyota 2020",
			price: 30000,
			rating: 3,
		},
		{
			id : 7,
			image: Images.TOYOTA.TOYOTA4,
			name: "Toyota 2021",
			price: 900000,
			rating: 5,
		},
		{
			id : 8,
			image: Images.TOYOTA.TOYOTA3,
			name: "Toyota 2020",
			price: 30000,
			rating: 3,
		},
		{
			id : 9,
			image: Images.TOYOTA.TOYOTA4,
			name: "Toyota 2021",
			price: 900000,
			rating: 5,
		},
		{
			id : 10,
			image: Images.TOYOTA.TOYOTA2,
			name: "Toyota 2019",
			price: 50000,
			rating: 5,
		},
		{
			id : 11,
			image: Images.TOYOTA.TOYOTA3,
			name: "Toyota 2020",
			price: 30000,
			rating: 3,
		},
		{
			id : 12,
			image: Images.TOYOTA.TOYOTA4,
			name: "Toyota 2021",
			price: 900000,
			rating: 5,
		},
	],
	
	
	
};

const listProductToyota = (state = initState.productToyota,action) => {
	switch (action.type) {
		default : return [...state];
	}

}

export default listProductToyota;