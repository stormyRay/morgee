import { connect } from "react-redux";
import TextColor from "../../components/setting-panels/TextColor";
import {customizeSettings} from "../../actions/customizeIndex";

const {changeTextColor} = customizeSettings;

const mapStateToProps = (state, ownProps) => {
	return {
		selectedTextColor: state.customizeSettings.textColor
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    switchTextColor: (textColor) => {
      dispatch(changeTextColor(textColor))
    }
  }
}

const TextColorSetting = connect(
  mapStateToProps,
  mapDispatchToProps
)(TextColor);

export default TextColorSetting;