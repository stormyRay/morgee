import { connect } from "react-redux";
import ClothTypeAndSize from "../../components/setting-panels/ClothTypeAndSize";
import {customizeSettings} from "../../actions/customizeIndex";

const {changeClothType, changeClothSize} = customizeSettings;

const mapStateToProps = (state, ownProps) => {
	return {
		selectedType: state.customizeSettings.clothType,
		selectedSize: state.customizeSettings.clothSize
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    switchClothType: (clothType) => {
    	dispatch(changeClothType(clothType))
    },
    switchClothSize: (clothSize) => {
    	dispatch(changeClothSize(clothSize))
    }
  }
}

const ClothTypeSetting = connect(
  mapStateToProps,
  mapDispatchToProps
)(ClothTypeAndSize);

export default ClothTypeSetting;