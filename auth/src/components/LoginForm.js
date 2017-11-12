import React, {Component} from 'react';
// import {View, TextInput} from 'react-native';
import {Button, Card, CardSection, Input} from './common';

class LoginForm extends Component {
		constructor(props) {
				super(props)
				this.state = {}
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
												secureTextEntry={true}
												/>
								</CardSection>

								<CardSection>
										<Button>
												Log In
										</Button>
								</CardSection>
						</Card>
				)
		}
}

export default LoginForm;
