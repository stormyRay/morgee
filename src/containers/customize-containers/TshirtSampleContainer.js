import { connect } from "react-redux";
import TshirtSampleArea from "../../components/TshirtSampleArea";

const mapStateToProps = (state, ownProps) => {
	return {
		settings: state.customizeSettings
	}
}

const TshirtSampleContainer = connect(
  mapStateToProps
)(TshirtSampleArea);

export default TshirtSampleContainer;