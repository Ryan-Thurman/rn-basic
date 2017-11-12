import React, {Component} from 'react';
import {Text} from 'react-native';
import firebase from 'firebase';
import {Button, Card, CardSection, Input} from './common';

class LoginForm extends Component {
		constructor(props) {
				super(props)
				this.state = {}
				this.onButtonPress = this.onButtonPress.bind(this)
		}
		onButtonPress() {
				const {email, password} = this.state;

				firebase
						.auth()
						.signInWithEmailAndPassword(email, password)
						.catch(() => {
								firebase
										.auth()
										.createUserWithEmailAndPassword(email, password)
										.catch((error) => {
												this.setState({error: 'Authentication Failed'})
										})
						})
		}
		render() {
				return (
						<Card>
								<CardSection>
										<Input
												placeholder={'Email@gmail.com'}
												label={'Email'}
												value={this.state.email}
												onChangeText={(email) => this.setState({email})}/>
								</CardSection>

								<CardSection>
										<Input
												placeholder={'Password'}
												label={'Password'}
												value={this.state.password}
												onChangeText={(password) => this.setState({password})}
												secureTextEntry={true}/>
								</CardSection>
								<Text>
										{this.state.error}
								</Text>
								<CardSection>
										<Button onPress={this.onButtonPress}>
												Log In
										</Button>
								</CardSection>
						</Card>
				)
		}
}

export default LoginForm;
