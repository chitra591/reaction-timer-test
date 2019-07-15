// import {USER_REGISTER_SUCCESS} from '../constants';
const INITIAL_STATE = {
    scores: [],
    average: 0.00
}

export default(state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "SET_SCORE":
            var scores = state.scores;
            scores.push(action.payload);
            var average = scores.reduce((previous, current) => current += previous) / scores.length;
            average = Math.round(average * 100) / 100;
            return {...state, scores, average};
            break;
        case "CLEAR_SCORE_CARD":
            var scores = state.scores;;
            scores.length = 0;
            return {...state, ...INITIAL_STATE, scores};
            break;     
        default:
            return state;
    }
}