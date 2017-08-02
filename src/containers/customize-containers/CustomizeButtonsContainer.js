import { connect } from "react-redux";
import CustomizeButtons from "../../components/CustomizeButtons";
import {customizeTab} from "../../actions/customizeIndex";

const {switchCustomizeTab} = customizeTab;

const mapStateToProps = (state, ownProps) => {
	return {
		settings: state.customizeSettings,
		imageId: ownProps.imageId
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    switchTab: (selectedTab) => {
      dispatch(switchCustomizeTab(selectedTab))
    }
  }
}

const CustomizeButtonsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomizeButtons);

export default CustomizeButtonsContainer;