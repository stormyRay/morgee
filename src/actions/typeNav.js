import {SWITCH_NAV_TYPE} from "../constants/actionTypes";

export const switchType = (activeType) => {
	return{
		type: SWITCH_NAV_TYPE,
		activeType
	}
}

export default {switchType};