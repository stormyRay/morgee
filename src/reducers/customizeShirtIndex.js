import { combineReducers } from "redux";
import activeCustomizeTab from "./activeCustomizeTab";
import customizeSettings from "./customizeSettings";

const reducers = combineReducers({
	activeCustomizeTab,
	customizeSettings
});

export default reducers;