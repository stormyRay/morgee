import { connect } from "react-redux";
import TextContent from "../../components/setting-panels/TextContent";
import {customizeSettings} from "../../actions/customizeIndex";

const {changeTextContent, changeThumbnailText} = customizeSettings;

const mapStateToProps = (state, ownProps) => {
	return {
		textValue: state.customizeSettings.textContent,
    thumbnailTextValue: state.customizeSettings.thumbnailContent
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeTextContent: (textContent) => {
      dispatch(changeTextContent(textContent))
    },
    changeTumbnailText: (content) => {
      dispatch(changeThumbnailText(content))
    }
  }
}

const TextContentSetting = connect(
  mapStateToProps,
  mapDispatchToProps
)(TextContent);

export default TextContentSetting;