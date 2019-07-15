import React from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import {stringConstants} from './constants';

export const ScoreCard = (props) => {
    const {scoreCard, resetGame} = props;
    return(
        <Modal
        animationType="slide"
        transparent={true}
        visible={scoreCard.scores.length >= 5}
        onRequestClose={() => {
            //clear store
        }}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: stringConstants.ASH_TRANSPARENT}}>
            <View style={{backgroundColor: stringConstants.WHITE, height: stringConstants.SCREEN_HEIGHT*0.45, width: '80%', padding: 20, borderRadius: 8}}>
                <View style={{flex: 1}}>
                    <Text style={{textAlign: 'center'}}>
                        {'Well Done! \n\nYour average reaction time is '}{scoreCard.average} secs
                    </Text>
                </View>
                <View style={{flex: 2, justifyContent: 'space-around'}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{color: stringConstants.DARK_GREY}}>
                            {"Round 1"}
                        </Text>
                        <Text style={{color: stringConstants.DARK_GREY}}>
                            {scoreCard.scores[0] || "0.00"} secs
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{color: stringConstants.DARK_GREY}}>
                            {"Round 2"}
                        </Text>
                        <Text style={{color: stringConstants.DARK_GREY}}>
                            {scoreCard.scores[1] || "0.00"} secs
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{color: stringConstants.DARK_GREY}}>
                            {"Round 3"}
                        </Text>
                        <Text style={{color: stringConstants.DARK_GREY}}>
                            {scoreCard.scores[2] || "0.00"} secs
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{color: stringConstants.DARK_GREY}}>
                            {"Round 4"}
                        </Text>
                        <Text style={{color: stringConstants.DARK_GREY}}>
                            {scoreCard.scores[3] || "0.00"} secs
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{color: stringConstants.DARK_GREY}}>
                            {"Round 5"}
                        </Text>
                        <Text style={{color: stringConstants.DARK_GREY}}>
                            {scoreCard.scores[4] || "0.00"} secs
                        </Text>
                    </View>
                </View>
                <TouchableOpacity 
                    style={{justifyContent: 'center', height: '15%', width: '80%', backgroundColor: stringConstants.BLUE, justifyContent: 'center', alignItems: 'center', margin: 20, borderWidth: 1, borderRadius: 8, borderColor: stringConstants.ASH}}
                    onPress={() => {
                        resetGame();
                    }}>
                    <Text style={{color: stringConstants.WHITE, textAlign: 'center'}}>
                        {"Got It!"}
                    </Text>
                </TouchableOpacity>
            </View>    
        </View>    
    </Modal>
    );
}