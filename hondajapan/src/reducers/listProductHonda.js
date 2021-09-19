import Images from "constants/Images";

var initState = [	
		{
			id : 1,
			image: Images.HONDA.HONDA1,
			name: "HonDa 2018",
			price: 12000,
			rating: 4,
		},
		{
			id : 2,
			image: Images.HONDA.HONDA2,
			name: "HonDa 2019",
			price: 50000,
			rating: 5,
		},
		{
			id : 3,
			image: Images.HONDA.HONDA3,
			name: "HonDa 2020",
			price: 30000,
			rating: 3,
		},
		{
			id : 4,
			image: Images.HONDA.HONDA4,
			name: "HonDa 2021",
			price: 900000,
			rating: 5,
		},
		{
			id : 5,
			image: Images.HONDA.HONDA1,
			name: "HonDa 2018",
			price: 12000,
			rating: 4,
		},
		{
			id : 6,
			image: Images.HONDA.HONDA2,
			name: "HonDa 2019",
			price: 50000,
			rating: 5,
		},
		{
			id : 7,
			image: Images.HONDA.HONDA3,
			name: "HonDa 2020",
			price: 30000,
			rating: 3,
		},
		{
			id : 8,
			image: Images.HONDA.HONDA4,
			name: "HonDa 2021",
			price: 900000,
			rating: 5,
		},

];

const listProductHonda = (state = initState,action) => {
	switch (action.type) {
		default : return [...state];
	}
}

export default listProductHonda;