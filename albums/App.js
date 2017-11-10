import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  // Text,
  View
} from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class App extends Component<{}> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>

    );
  }
}

// const styles = StyleSheet.create({
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
