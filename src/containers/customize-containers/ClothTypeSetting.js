import { connect } from "react-redux";
import ClothType from "../../components/setting-panels/ClothType";
import {customizeSettings} from "../../actions/customizeIndex";

const {changeClothType} = customizeSettings;

const mapStateToProps = (state, ownProps) => {
	return {
		selectedType: state.customizeSettings.clothType
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    switchClothType: (clothType) => {
      dispatch(changeClothType(clothType))
    }
  }
}

const ClothTypeSetting = connect(
  mapStateToProps,
  mapDispatchToProps
)(ClothType);

export default ClothTypeSetting;