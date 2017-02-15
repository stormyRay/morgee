import { connect } from "react-redux";
import HotImages from "../../components/HotImages";
import {imagesAndThemes} from "../../actions/index";

const {getHotImages} = imagesAndThemes;

const mapStateToProps = (state, ownProps) => {
  return {
    hotImages: state.hotImages
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getHotImages: (id) => {
      dispatch(getHotImages())
    }
  }
};

const HotImagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HotImages)

export default HotImagesContainer;