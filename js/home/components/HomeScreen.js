import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StatusBar} from 'react-native';
import {stringConstants} from '../../common/constants';
import {ScoreCard, Instructions} from '../../common';
import Button from '../../common/Button';
import {styles} from '../styles';

const INITIAL_STATE = {
    currentBackgroundColor: stringConstants.RED,
    isGreen: false,
    randomNumber: undefined,
    colorSwitchTime: undefined,
    buttonClickTime: undefined,
    buttonText: 'Begin!',
    buttonColor: stringConstants.YELLOW,
    showInstructions: false
}
const InfoPNG = require('../../assets/images/info/info.png');
const RefreshPNG = require('../../assets/images/refresh/refresh.png');

class HomeScreen extends Component {
    constructor() {
        super();
        this.state = INITIAL_STATE;
    }
    componentWillMount() {
        this.setState({showInstructions: true});
    }
    getRandomNumber = () => {
        if (!this.state.randomNumber) {
            this.setState({buttonText: 'Click here when screen turns green', buttonColor: stringConstants.LIGHT_YELLOW});
            this.props.getRandomNumber((error, response) => {
                if (!response.isInternetUnvailable && response.randomNumber) { 
                    this.setState({randomNumber: response.randomNumber});
                    setTimeout(() => {
                        this.setState({isGreen: true, currentBackgroundColor: stringConstants.GREEN, colorSwitchTime: Date.now()});
                    }, response.randomNumber*1000);
                }
            });
        }
    }
    recordTheResponseTime = () => {
        const buttonClickTime = Date.now();
        const {colorSwitchTime} = this.state;
        var timeDiff = buttonClickTime - colorSwitchTime;
        timeDiff /= 1000;
        var seconds = Math.round(timeDiff * 100) / 100;
        this.props.setScore({score: seconds});
        this.setState(INITIAL_STATE);
    }
    resetGame = () => {
        this.setState(INITIAL_STATE);
        this.props.clearScoreCard();
    }
    closeInstructionsModal = () => {
        this.setState({showInstructions: false});
    }
    render() {
        return(
            <View style={[styles.container, {backgroundColor: this.state.currentBackgroundColor}]}>
                <StatusBar hidden={true}/>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.headerLeft} onPress={()=>{this.setState({showInstructions: true})}}>
                        <Image source={InfoPNG} style={styles.icons} />
                    </TouchableOpacity>
                    <View style={{flex: 1}} />
                    <TouchableOpacity style={styles.headerRight} onPress={() => {this.resetGame()}}>
                        <Image source={RefreshPNG} style={styles.icons} />
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    <Button label={this.state.buttonText} onPress={()=> {!this.state.isGreen ? this.getRandomNumber() : this.recordTheResponseTime()}} primary={!this.state.isGreen} />
                </View>
                <View style={styles.footer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{"Score"}</Text>
                    </View>
                    <View style={styles.footerBody}>
                        <Score score={this.props.scoreCard.scores[0]} />
                        <Score score={this.props.scoreCard.scores[1]} />
                        <Score score={this.props.scoreCard.scores[2]} />
                        <Score score={this.props.scoreCard.scores[3]} />
                        <Score score={this.props.scoreCard.scores[4]} />
                    </View>
                </View>
                <ScoreCard scoreCard={this.props.scoreCard} resetGame={this.resetGame}/>
                <Instructions showInstructions={this.state.showInstructions} closeInstructionsModal={this.closeInstructionsModal} />
            </View>
        )
    }
}

const Score = (props) => {
    const {score} = props;

    return(
        <View style={styles.scoreItemContainer}>
            <Text style={styles.scoreItemText}>
                {score || "0.00"}
            </Text>
        </View>
    )
}

export default HomeScreen;