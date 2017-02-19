import { connect } from "react-redux";
import SettingPanel from "../../components/SettingPanel";

const mapStateToProps = (state, ownProps) => {
	return {
		activeCustomizeTab: state.activeCustomizeTab
	}
}

const SettingPanelContainer = connect(
  mapStateToProps
)(SettingPanel);

export default SettingPanelContainer;