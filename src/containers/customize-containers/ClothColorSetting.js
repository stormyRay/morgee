import { connect } from "react-redux";
import ClothColor from "../../components/setting-panels/ClothColor";
import {customizeSettings} from "../../actions/customizeIndex";

const {changeClothColor} = customizeSettings;

const mapStateToProps = (state, ownProps) => {
	return {
		selectedColor: state.customizeSettings.clothColor
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    switchClothColor: (ClothColor) => {
      dispatch(changeClothColor(ClothColor))
    }
  }
}

const ClothColorSetting = connect(
  mapStateToProps,
  mapDispatchToProps
)(ClothColor);

export default ClothColorSetting;