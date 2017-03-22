import { connect } from "react-redux";
import OrderPage from "../../components/order-page/OrderPage";
import {order} from "../../actions/customizeIndex";

const {getOrderInfo} = order;

const mapStateToProps = (state, ownProps) => {
	return {
		imagePrice: state.orderInfo.imagePrice,
		clothPrice: state.orderInfo.clothPrice,
		printPrice: state.orderInfo.printPrice,
		clothType: state.customizeSettings.clothType,
		clothColor: state.customizeSettings.clothColor,
		clothSize: state.customizeSettings.clothSize,
		orderNumber: state.orderInfo.number
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getOrderInfo: (imageId, clothType, clothColor, clothSize) => {
      dispatch(getOrderInfo(imageId, clothType, clothColor, clothSize))
    }
  }
}

const OrderPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderPage);

export default OrderPageContainer;