import {StyleSheet} from 'react-native';
import {stringConstants} from '../common/constants';

export const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 20
    },
    header: {
        flex: 1, 
        justifyContent: 'center', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    headerLeft: {
        flex: 1, 
        alignItems: 'flex-start'
    },
    headerRight: {
        flex: 1, 
        alignItems: 'flex-end'
    },
    icons: {
        height: '30%', 
        width: '30%', 
        resizeMode: 'contain'
    },
    body: {
        flex: 8, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
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
    footer: {
        flex: 1.5, 
        borderTopWidth: 1, 
        borderTopColor: stringConstants.WHITE
    },
    titleContainer: {
        flex: 1, 
        paddingTop: '3%'
    },
    title: {
        color: stringConstants.WHITE, 
        fontWeight: 'bold'
    },
    footerBody: {
        flex: 2, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-around'
    },
    scoreItemContainer: {
        borderWidth: 1, 
        height: '90%', 
        width: '15%', 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 8, 
        borderColor: stringConstants.ASH
    },
    scoreItemText: {
        color: stringConstants.WHITE
    }
});