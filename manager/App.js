import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'

import reducers from './src/reducers'
import Firebase_config from './config/Firebase_config'

import LoginForm from './src/components/LoginForm'
import {Header} from './src/components/common'

export default class App extends Component < {} > {
		componentWillMount() {
				firebase.initializeApp(Firebase_config);
		}
		render() {
				return (
						<Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
								<View>
										<Header headerText={'manager'}/>
										<LoginForm/>
								</View>
						</Provider>
				)
		}
}