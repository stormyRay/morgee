import { connect } from "react-redux";
import TextCategories from "../../components/TextCategories";
import {getCategories} from "../../actions/categories";

const mapStateToProps = (state, ownProps) => {
	return {
		categories: state.categories
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getCategories: () => {
      dispatch(getCategories())
    }
  }
}

const TextCategoriesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TextCategories);

export default TextCategoriesContainer;