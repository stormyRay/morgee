import { combineReducers } from "redux";
import activeType from "./activeType";
import hotImages from "./hotImages";
import themes from "./themes";
import gallery from "./gallery";

const reducers = combineReducers({
	activeType,
	hotImages,
	themes,
	gallery
});

export default reducers;