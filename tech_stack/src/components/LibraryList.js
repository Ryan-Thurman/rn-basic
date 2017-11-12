import React, { Component } from "react";
import {View, Text, ListView} from 'react-native';
import {connect} from 'react-redux';

import ListItem from './ListItem'

class LibraryList extends Component {
		constructor(props) {
			super(props);
				this.state = {};
				this.renderRow = this.renderRow.bind(this);
		}
		componentWillMount(){
			const ds = new ListView.DataSource({
				rowHasChanged: (r1, r2) => r1 !== r2
			});

			this.dataSource = ds.cloneWithRows(this.props.libraryList);
		}
		renderRow(library) {
			return <ListItem library={library}/>;
		}
		render() {
				return (
						<ListView dataSource={this.dataSource} renderRow={this.renderRow} />
				)
		}
};

const mapStateToProps = (state) => {
	return {libraryList: state.libraries}
}

export default connect(mapStateToProps)(LibraryList);