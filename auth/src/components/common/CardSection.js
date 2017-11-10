import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    // const { container } = style
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    );
};

const styles = {
    container: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        borderColor: '#ddd',
        position: 'relative',
        flexDirection: 'row'

    }
};
export default CardSection;
