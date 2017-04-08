import { connect } from "react-redux";
import TextContent from "../../components/setting-panels/TextContent";
import {customizeSettings} from "../../actions/customizeIndex";

const {changeTextContent} = customizeSettings;

const mapStateToProps = (state, ownProps) => {
	return {
		textValue: state.customizeSettings.textContent
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeTextContent: (textContent) => {
      dispatch(changeTextContent(textContent))
    }
  }
}

const TextContentSetting = connect(
  mapStateToProps,
  mapDispatchToProps
)(TextContent);

export default TextContentSetting;