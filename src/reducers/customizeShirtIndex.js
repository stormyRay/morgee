import { combineReducers } from "redux";
import activeCustomizeTab from "./activeCustomizeTab";
import customizeSettings from "./customizeSettings";
import order from "./order";

const reducers = combineReducers({
	activeCustomizeTab,
	customizeSettings,
	order
});

export default reducers;