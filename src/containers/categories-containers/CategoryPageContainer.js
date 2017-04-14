import { connect } from "react-redux";
import CategoryPage from "../../components/CategoryPage";
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

const CategoryPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryPage);

export default CategoryPageContainer;