import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: [],
        };
    }
    componentDidMount() {
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
        .then((response) => response.json())
        .then((data) => this.setState({
            albums: data
        }))
        .catch(error => {
            console.log(error);
        });
    }
    renderAlbums() {
        return this.state.albums.map((album) => {
            return <AlbumDetail key={album.title} album={album} />;
        });
    }
    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;
