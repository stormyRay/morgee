import { combineReducers } from "redux";
import activeType from "./activeType";
import hotImages from "./hotImages";
import themes from "./themes";

const reducers = combineReducers({
	activeType,
	hotImages,
	themes
});

export default reducers;