import { connect } from "react-redux";
import SettingPanel from "../../components/SettingPanel";
import {customizeSettings} from "../../actions/customizeIndex";

const {getThumbnailSrc} = customizeSettings;

const mapStateToProps = (state, ownProps) => {
	return {
		activeCustomizeTab: state.activeCustomizeTab,
		settings: state.customizeSettings
	}
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateThumbnail: (opts) => {
      dispatch(getThumbnailSrc("text", opts))
    }
  }
}

const SettingPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingPanel);

export default SettingPanelContainer;