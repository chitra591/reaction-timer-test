import {StyleSheet} from 'react-native';
import {stringConstants} from '../common/constants';

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'space-around',
        margin: 20
    },
    body: {
        flex: 3, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    button: {
        justifyContent: 'center', 
        height: '10%', 
        width: '80%', 
        backgroundColor: stringConstants.BLUE, 
        justifyContent: 'center', 
        alignItems: 'center', 
        margin: 20, 
        borderWidth: 1, 
        borderRadius: 8, 
        borderColor: stringConstants.ASH
    },
    text: {
        color: stringConstants.BLACK
    }
});