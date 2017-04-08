import { connect } from "react-redux";
import CustomizeTextTabNav from "../../components/CustomizeTextTabNav";
import {customizeTab} from "../../actions/customizeIndex";

const {switchCustomizeTab} = customizeTab;

const mapStateToProps = (state, ownProps) => {
	return {
		activeCustomizeTab: state.activeCustomizeTab
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    swicthTab: (selectedTab) => {
      dispatch(switchCustomizeTab(selectedTab))
    }
  }
}

const CustomizeTextTabNavContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomizeTextTabNav);

export default CustomizeTextTabNavContainer;