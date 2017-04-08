import { connect } from "react-redux";
import TextFont from "../../components/setting-panels/TextFont";
import {customizeSettings} from "../../actions/customizeIndex";

const {changeTextFont} = customizeSettings;

const mapStateToProps = (state, ownProps) => {
	return {
		selectedFont: state.customizeSettings.textFont
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    switchTextFont: (textFont) => {
      dispatch(changeTextFont(textFont))
    }
  }
}

const TextFontSetting = connect(
  mapStateToProps,
  mapDispatchToProps
)(TextFont);

export default TextFontSetting;