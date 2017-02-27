import { connect } from "react-redux";
import TshirtSampleArea from "../../components/TshirtSampleArea";

const mapStateToProps = (state, ownProps) => {
	return {
		settings: state.customizeSettings,
		selectedSetting: state.activeCustomizeTab
	}
}

const TshirtSampleContainer = connect(
  mapStateToProps
)(TshirtSampleArea);

export default TshirtSampleContainer;