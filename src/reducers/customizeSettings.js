import {CHANGE_CLOTH_TYPE, CHANGE_CLOTH_SIZE, CHANGE_CLOTH_COLOR, CHANGE_IMAGE_SIZE, CHANGE_IMAGE_POSITION, CHANGE_TEXT_CONTENT, CHANGE_TEXT_FONT, CHANGE_TEXT_COLOR, CHANGE_THUMBNAIL_SRC, CHANGE_THUMBNAIL_TEXT} from "../constants/actionTypes";

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
    case CHANGE_TEXT_CONTENT:
        return Object.assign({}, state, {
          textContent: action.textContent
        });
    case CHANGE_TEXT_FONT:
        return Object.assign({}, state, {
          textFont: action.textFont
        });
    case CHANGE_TEXT_COLOR:
        return Object.assign({}, state, {
          textColor: action.textColor
        });
    case CHANGE_THUMBNAIL_SRC:
        return Object.assign({}, state, {
          thumbnailSrc: action.src
        });
    case CHANGE_THUMBNAIL_TEXT:
        return Object.assign({}, state, {
          thumbnailContent: action.content
        });
    default:
        return state;
  }
}

export default customizeSettings;