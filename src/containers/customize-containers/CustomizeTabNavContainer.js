import { connect } from "react-redux";
import CustomizeTabNav from "../../components/CustomizeTabNav";
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

const CustomizeTabNavContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomizeTabNav);

export default CustomizeTabNavContainer;