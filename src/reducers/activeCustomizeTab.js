import {SWITCH_CUSTOMIZE_TAB} from "../constants/actionTypes";

const activeCustomizeTab = (state = {}, action) => {
  switch (action.type) {
    case SWITCH_CUSTOMIZE_TAB:
       return action.activeCustomizeTab;
    default:
      return state;
  }
}

export default activeCustomizeTab;