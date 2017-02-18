import React from "react";
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroller";
import {SEARCH_BY_THEME} from "../../constants/texts";
import Theme from "../../components/Theme";
import {imagesAndThemes} from "../../actions/pickImageIndex";

class ThemeList extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		const {themes, dispatch} = this.props;
		const {themeList, hasMore, page} = themes;
		const {getThemes} = imagesAndThemes;
		var showingThemes = [];
		for(var i = 0; i < themeList.length; i++){
			showingThemes.push(<Theme key={themeList[i].id} {...themeList[i]} />)
		}
		return (
			<div className="container theme-list-container">
				<div className="header theme-list-header">
					<h3>{SEARCH_BY_THEME}</h3>
				</div>
				<div className="theme-list-content">
					<InfiniteScroll hasMore={hasMore} loadMore={() => {dispatch(getThemes(page))}} loader={<div className="loader">Loading ...</div>}>
						{showingThemes}
					</InfiniteScroll>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
  return {
    themes: state.themes
  }
}

const ThemeListContainer = connect(
  mapStateToProps
)(ThemeList)

export default ThemeListContainer;


