import {UPDATE_IMAGES, CLEAR_IMAGES} from "../constants/actionTypes";

const gallery = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_IMAGES:
        let newList = [];
        for (var i = 0; i < state.imageList.length; i++){
            newList.push(state.imageList[i]);
        }
        for (var i = 0; i < action.images.imageList.length; i++){
            newList.push(action.images.imageList[i]);
        }
        return {
            imageList: newList,
            hasMore: action.images.hasMore,
            page: action.images.page,
            theme: action.images.theme
        };
    case CLEAR_IMAGES:
        return{
            imageList: [],
            hasMore: true,
            page: 0,
            theme: "选择图片"
        }
    default:
        return state;
    }
}

export default gallery;