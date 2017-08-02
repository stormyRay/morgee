import { connect } from "react-redux";
import CustomizeImageTabNav from "../../components/CustomizeImageTabNav";
import {customizeTab} from "../../actions/customizeIndex";

const {switchCustomizeTab} = customizeTab;

const mapStateToProps = (state, ownProps) => {
	return {
		activeCustomizeTab: state.activeCustomizeTab
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    switchTab: (selectedTab) => {
      dispatch(switchCustomizeTab(selectedTab))
    }
  }
}

const CustomizeImageTabNavContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomizeImageTabNav);

export default CustomizeImageTabNavContainer;