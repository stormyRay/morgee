import React from "react";
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroller";
import {SEARCH_BY_THEME} from "../../constants/texts";
import Theme from "../../components/Theme";
import {imagesAndThemes} from "../../actions/index";

class ThemeList extends React.Component{
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const {getThemes} = imagesAndThemes;
		const {dispatch} = this.props;
		dispatch(getThemes());
	}

	render() {
		const {themes} = this.props;
		const {getThemes} = imagesAndThemes;
		const {dispatch} = this.props;
		var showingThemes = [];
		for(var i = 0; i < themes.length; i++){
			showingThemes.push(<Theme key={themes[i].id} {...themes[i]} />)
		}
		return (
			<div className="container theme-list-container">
				<div className="header theme-list-header">
					<h3>{SEARCH_BY_THEME}</h3>
				</div>
				<div className="theme-list-content">
					<InfiniteScroll hasMore={true} loadMore={() => {dispatch(getThemes())}} loader={<div className="loader">Loading ...</div>}>
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


