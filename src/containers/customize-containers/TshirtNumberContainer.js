import { connect } from "react-redux";
import TshirtNumber from "../../components/order-page/customer-info/TshirtNumber";
import {order} from "../../actions/customizeIndex";

const {updateOrderNumber} = order;

const mapStateToProps = (state, ownProps) => {
	return {
		orderNumber: state.orderInfo.number
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateOrderNumber: (number) => {
      dispatch(updateOrderNumber(number))
    }
  }
}

const TshirtNumberContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TshirtNumber);

export default TshirtNumberContainer;