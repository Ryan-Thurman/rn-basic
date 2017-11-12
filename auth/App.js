import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';

import {Header, Button, CardSection, Spinner} from './src/components/common';
import LoginForm from './src/components/LoginForm';

import FirebaseConfig from './config/firebase_config';

export default class App extends Component < {} > {
		constructor(props) {
				super(props);
				this.state = {};
				this.renderContent = this
						.renderContent
						.bind(this);
		}

		componentDidMount() {
				firebase.initializeApp(FirebaseConfig);
				firebase
						.auth()
						.onAuthStateChanged((user) => {
								if (user) {
										this.setState({loggedIn: true});
								} else {
										this.setState({loggedIn: false});
								}
						});
		}
		renderContent() {
				switch (this.state.loggedIn) {
						case true:
								return (
										<CardSection>
												<Button onPress={() => firebase.auth().signOut()}>
														Logout
												</Button>
										</CardSection>
								);
						case false:
								return <LoginForm />;
						default:
								return <Spinner />;
				}
		}
		render() {
				return (
						<View>
								<Header headerText='Auth App'/> 
								{this.renderContent()}
						</View>
				);
		}
}
