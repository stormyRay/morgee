import { connect } from "react-redux";
import OrderPage from "../../components/order-page/OrderPage";
import {order} from "../../actions/customizeIndex";

const {getOrderInfo} = order;

const mapStateToProps = (state, ownProps) => {
	return {
		contentPrice: state.orderInfo.contentPrice,
		clothPrice: state.orderInfo.clothPrice,
		printPrice: state.orderInfo.printPrice,
		clothType: state.customizeSettings.clothType,
		clothColor: state.customizeSettings.clothColor,
		clothSize: state.customizeSettings.clothSize,
		textContent: state.customizeSettings.textContent,
		textFont: state.customizeSettings.textFont,
		textColor: state.customizeSettings.textColor,
		orderNumber: state.orderInfo.number
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getOrderInfo: (clothInfo, customType, imageId, textInfo) => {
      dispatch(getOrderInfo(clothInfo, customType, imageId, textInfo))
    }
  }
}

const OrderPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderPage);

export default OrderPageContainer;