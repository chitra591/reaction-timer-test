import NetworkManager from '../../NetworkManager.js';

export const getRandomNumber = (callback) => {
    return (dispatch) => {
        NetworkManager.getRandomNumber((error, response) => {
            if(error){
                callback(error, null);
            } else {
                callback(null, response);
                dispatch({type: 'GET_RANDOM_NUMBER_SUCCESS', payload: response});
            }
        });
    }
}

export const setScore = ({score}) => {
    return (dispatch) => {
        dispatch({type: 'SET_SCORE', payload: score});
    }
}

export const clearScoreCard = () => {
    return (dispatch) => {
        dispatch({type: 'CLEAR_SCORE_CARD'});
    }
}