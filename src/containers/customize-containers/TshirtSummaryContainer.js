import { connect } from "react-redux";
import TshirtSummary from "../../components/order-page/tshirt-summary/TshirtSummary";

const mapStateToProps = (state, ownProps) => {
	return {
		imageTitle: state.order.imageTitle,
		clothType: state.customizeSettings.clothType,
		clothDescription: state.order.clothDescription,
		imagePrice: state.order.imagePrice,
		clothPrice: state.order.clothPrice,
		printPrice: state.order.printPrice
	};
}


const TshirtSummaryContainer = connect(
  mapStateToProps
)(TshirtSummary);

export default TshirtSummaryContainer;