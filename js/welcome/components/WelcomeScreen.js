import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../styles';

class WelcomeScreen extends Component {
    render() {
        return(
            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.body}>
                    <Text style={styles.text}>{"Welcome to Reaction-time Tester"}</Text>
                    <Text style={styles.text}>{"Find out your average reaction time is!"}</Text>
                </View>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={[styles.text, {textAlign: 'center'}]}>{"Let's begin!"}</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state, ownProps = {}) => {
    return state;
};

export default connect(mapStateToProps, null)(WelcomeScreen);