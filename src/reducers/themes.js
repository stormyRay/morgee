import {UPDATE_THEMES} from "../constants/actionTypes";

const themes = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_THEMES:
    	let newList = [];
    	for (var i = 0; i < state.length; i++){
    		newList.push(state.themeList[i]);
    	}
    	for (var i = 0; i < action.themes.length; i++){
    		newList.push(action.themes.themeList[i]);
    	}
       return {
       	themeList: newList,
       	hasMore: action.themes.hasMore
       };
    default:
      return state;
  }
}

export default themes;