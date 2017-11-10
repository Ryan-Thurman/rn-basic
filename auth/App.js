import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import { Header } from './src/components/common'
import LoginForm from './src/components/LoginForm'

import firebase from 'firebase';
import FirebaseConfig from './config/firebase_config'

export default class App extends Component<{}> {

  componentDidMount() {
    firebase.initializeApp(FirebaseConfig)
  }

  render() {
    return (
      <View>
        <Header />
        <LoginForm />
        <Text> App is working </Text>
      </View>
    );
  }
}

