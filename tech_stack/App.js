/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers'

export default class App extends Component<{}> {
  render() {
    return (
			<Provider store={createStore(reducers, {})}>
      <View >
        <Text >
          Welcome to React Native!
        </Text>
        <Text>
          To get started, edit App.js
        </Text>
      </View>
			</Provider>
    );
  }
}