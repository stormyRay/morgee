import { connect } from "react-redux";
import ImageSize from "../../components/setting-panels/ImageSize";
import {customizeSettings} from "../../actions/customizeIndex";

const {changeImageSize} = customizeSettings;

const mapStateToProps = (state, ownProps) => {
	return {
		currentSize: state.customizeSettings.imageSize
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeSize: (imageSize) => {
      dispatch(changeImageSize(imageSize))
    }
  }
}

const ImageSizeSetting = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageSize);

export default ImageSizeSetting;