import {SWITCH_NAV_TYPE} from "../constants/actionTypes";

const activeType = (state = {}, action) => {
  switch (action.type) {
    case SWITCH_NAV_TYPE:
       return action.activeType;
    default:
      return state;
  }
}

export default activeType;