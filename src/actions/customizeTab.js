import {SWITCH_CUSTOMIZE_TAB} from "../constants/actionTypes";

export const switchCustomizeTab = (activeCustomizeTab) => {
	return{
		type: SWITCH_CUSTOMIZE_TAB,
		activeCustomizeTab
	}
}

export default {switchCustomizeTab};