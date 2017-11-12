import React from 'react';
import {TextInput, View, Text} from 'react-native';

const Input = (props) => {
	const {inputStyle, labelStyle, constainerStyle} = styles;
		return (
				<View style={constainerStyle}>
						<Text style={labelStyle}>{props.label}</Text>
						<TextInput
								secureTextEntry={props.secureTextEntry}
								style={inputStyle}
								value={props.value}
								onChangeText={props.onChangeText}
								autoCorrect={false}
								placeholder={props.placeholder}
						/>
				</View>
		);
};

const styles = {
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 2
	}, 
	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1
	},
	constainerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}
};

export {Input};