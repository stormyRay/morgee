import { connect } from "react-redux";
import ImagePosition from "../../components/setting-panels/ImagePosition";
import {customizeSettings} from "../../actions/customizeIndex";

const {changeImagePosition} = customizeSettings;

const mapStateToProps = (state, ownProps) => {
	return {
		currentPosition: state.customizeSettings.imagePosition
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changePosition: (imagePosition) => {
      dispatch(changeImagePosition(imagePosition))
    }
  }
}

const ImagePositionSetting = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImagePosition);

export default ImagePositionSetting;