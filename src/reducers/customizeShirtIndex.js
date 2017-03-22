import { combineReducers } from "redux";
import activeCustomizeTab from "./activeCustomizeTab";
import customizeSettings from "./customizeSettings";
import orderInfo from "./orderInfo";

const reducers = combineReducers({
	activeCustomizeTab,
	customizeSettings,
	orderInfo
});

export default reducers;