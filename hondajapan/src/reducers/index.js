import { combineReducers } from "redux";
import listProductHonda from "./listProductHonda";
import Card from "./Card";
import listProductToyota from "./listProductToyota";

const appReducers = combineReducers({
	listProductHonda,   //listProducts: listProducts
	Card,
	listProductToyota
});
export default appReducers;