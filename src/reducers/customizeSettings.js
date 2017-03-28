import {CHANGE_CLOTH_TYPE, CHANGE_CLOTH_SIZE, CHANGE_CLOTH_COLOR, CHANGE_IMAGE_SIZE, CHANGE_IMAGE_POSITION} from "../constants/actionTypes";

const customizeSettings = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_CLOTH_TYPE:
        return Object.assign({}, state, {
       		clothType: action.clothType
        });
    case CHANGE_CLOTH_SIZE:
        return Object.assign({}, state, {
          clothSize: action.clothSize
        });
    case CHANGE_CLOTH_COLOR:
        return Object.assign({}, state, {
       		clothColor: action.clothColor
        });
    case CHANGE_IMAGE_SIZE:
        return Object.assign({}, state, {
       		imageSize: action.imageSize
        });
    case CHANGE_IMAGE_POSITION:
        return Object.assign({}, state, {
       		imagePosition: action.imagePosition
        });
    default:
        return state;
  }
}

export default customizeSettings;