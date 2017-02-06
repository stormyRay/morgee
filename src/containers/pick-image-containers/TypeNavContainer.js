import { connect } from "react-redux";
import TypeNav from "../../components/TypeNav";
import {typeNav} from "../../actions/index";

const {switchType} = typeNav;

const mapStateToProps = (state, ownProps) => {
	return {
		activeType: state.activeType
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    swicthType: (selectedType) => {
      dispatch(switchType(selectedType))
    }
  }
}

const typeNavContainers = connect(
  mapStateToProps,
  mapDispatchToProps
)(TypeNav);

export default typeNavContainers;