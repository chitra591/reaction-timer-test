import React from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import {stringConstants} from './constants';

export const Instructions = (props) => {
    const {showInstructions, closeInstructionsModal} = props;

    return(
        <Modal
        animationType="slide"
        transparent={true}
        visible={showInstructions}
        onRequestClose={() => {
            //clear store
        }}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: stringConstants.ASH_TRANSPARENT}}>
            <View style={{backgroundColor: stringConstants.WHITE, height: stringConstants.SCREEN_HEIGHT*0.45, width: '80%', padding: 20, borderRadius: 8}}>
                <View style={{flex: 1}}>
                    <Text style={{textAlign: 'center'}}>
                        {'Reaction Time Test'}
                    </Text>
                </View>
                <View style={{flex: 5, justifyContent: 'space-around'}}>
                    <View>
                        <Text style={{color: stringConstants.DARK_GREY, fontWeight: 'bold'}}>
                            {"Instructions:"}
                        </Text>
                    </View>
                    <View>
                        <Text style={{color: stringConstants.DARK_GREY}}>
                            {"1. Click the button on the screen to begin."}
                        </Text>
                    </View>
                    <View>
                        <Text style={{color: stringConstants.DARK_GREY}}>
                            {"2. Wait for the screen to turn green."}
                        </Text>
                    </View>
                    <View>
                        <Text style={{color: stringConstants.DARK_GREY}}>
                            {"3. When the screen turns green, click the button quickly!"}
                        </Text>
                    </View>
                    <View>
                        <Text style={{color: stringConstants.DARK_GREY}}>
                            {"4. Click the button again to continue to the next test."}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity 
                    style={{justifyContent: 'center', height: '15%', width: '80%', backgroundColor: stringConstants.BLUE, justifyContent: 'center', alignItems: 'center', margin: 20, borderWidth: 1, borderRadius: 8, borderColor: stringConstants.ASH}}
                    onPress={() => {
                        closeInstructionsModal();
                    }}>
                    <Text style={{color: stringConstants.WHITE, textAlign: 'center'}}>
                        {"Got It!"}
                    </Text>
                </TouchableOpacity>
            </View>    
        </View>    
    </Modal>
            
    )
}