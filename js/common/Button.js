import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {stringConstants} from './constants';

export default class Button extends Component {
    constructor(props) {
        super(props);
    }
    onPressHandler = () => {
        const {onPress} = this.props;
        onPress();
    }
    render() {
        const {label, onPress, primary} = this.props;

        return(
            <TouchableOpacity 
                style={[styles.button, {backgroundColor: primary ?  stringConstants.YELLOW :  stringConstants.LIGHT_YELLOW}]}
                onPress={this.onPressHandler}>
                <Text style={styles.text}>
                    {label}
                </Text>
            </TouchableOpacity>
        );
    }
};

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center', 
        height: '10%', 
        width: '80%', 
        justifyContent: 'center', 
        alignItems: 'center', 
        margin: 20, 
        borderWidth: 1, 
        borderRadius: 8, 
        borderColor: stringConstants.ASH
    },
    text: {color: stringConstants.GREY, textAlign: 'center'}
})