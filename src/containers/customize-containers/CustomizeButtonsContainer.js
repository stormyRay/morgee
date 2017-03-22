import { connect } from "react-redux";
import CustomizeButtons from "../../components/CustomizeButtons";

const mapStateToProps = (state, ownProps) => {
	return {
		settings: state.customizeSettings,
		imageId: ownProps.imageId
	}
}

const CustomizeButtonsContainer = connect(
  mapStateToProps
)(CustomizeButtons);

export default CustomizeButtonsContainer;