import { connect } from "react-redux";
import TshirtSampleArea from "../../components/TshirtSampleArea";
import {customizeSettings} from "../../actions/customizeIndex";

const {getThumbnailSrc, changeThumbnailText} = customizeSettings;

const mapStateToProps = (state, ownProps) => {
	return {
		settings: state.customizeSettings,
		selectedSetting: state.activeCustomizeTab,
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeThumbnail: (type, opts) => {
      dispatch(getThumbnailSrc(type, opts))
    },
    changeTumbnailText: (content) => {
      dispatch(changeThumbnailText(content))
    }
  }
}

const TshirtSampleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TshirtSampleArea);

export default TshirtSampleContainer;