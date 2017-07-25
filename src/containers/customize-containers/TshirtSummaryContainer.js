import { connect } from "react-redux";
import TshirtSummary from "../../components/order-page/tshirt-summary/TshirtSummary";

const mapStateToProps = (state, ownProps) => {
	return {
		imageTitle: state.orderInfo.imageTitle,
		clothType: state.customizeSettings.clothType,
		clothDescription: state.orderInfo.clothDescription,
		contentPrice: state.orderInfo.contentPrice,
		clothPrice: state.orderInfo.clothPrice,
		printPrice: state.orderInfo.printPrice
	};
}


const TshirtSummaryContainer = connect(
  mapStateToProps
)(TshirtSummary);

export default TshirtSummaryContainer;