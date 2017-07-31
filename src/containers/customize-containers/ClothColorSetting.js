import { connect } from "react-redux";
import ClothColor from "../../components/setting-panels/ClothColor";
import {customizeSettings} from "../../actions/customizeIndex";

const {changeClothColor, changeTextColor} = customizeSettings;

const mapStateToProps = (state, ownProps) => {
	return {
		selectedColor: state.customizeSettings.clothColor
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    switchClothColor: (clothColor) => {
      dispatch(changeClothColor(clothColor));
      //Hide the interface for text color selecting.
      //Make a default text color selection for each T-shirt color.
      const newTextColor = clothColor == "white" ? "black" : "white";
      dispatch(changeTextColor(newTextColor));
      ownProps.updateThumbnail(null, null, newTextColor);
    }
  }
}

const ClothColorSetting = connect(
  mapStateToProps,
  mapDispatchToProps
)(ClothColor);

export default ClothColorSetting;