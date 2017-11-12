import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import firebase from 'firebase';

import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';

import FirebaseConfig from './config/firebase_config';

export default class App extends Component<{}> {

  componentDidMount() {
    firebase.initializeApp(FirebaseConfig);
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

