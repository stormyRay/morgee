import {UPDATE_THEMES} from "../constants/actionTypes";

const themes = (state = [], action) => {
  switch (action.type) {
    case UPDATE_THEMES:
    	let newState = [];
    	for (var i = 0; i < state.length; i++){
    		newState.push(state[i]);
    	}
    	for (var i = 0; i < action.themes.length; i++){
    		newState.push(action.themes[i]);
    	}
       return newState;
    default:
      return state;
  }
}

export default themes;