import { connect } from "react-redux";
import TshirtSampleArea from "../../components/TshirtSampleArea";
import {customizeSettings} from "../../actions/customizeIndex";

const {changeImageSize} = customizeSettings;

const mapStateToProps = (state, ownProps) => {
	return {
		settings: state.customizeSettings,
		selectedSetting: state.activeCustomizeTab
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeThumbnail: (type, opts) => {
      dispatch(getThumbnailSrc(type, opts))
    }
  }
}

const TshirtSampleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TshirtSampleArea);

export default TshirtSampleContainer;