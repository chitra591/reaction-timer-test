import {connect} from 'react-redux';
import HomeScreen from './HomeScreen';
import {getRandomNumber, setScore, clearScoreCard} from '../actions';

const mapStateToProps = (state, ownProps = {}) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        getRandomNumber: (callback) => {
            dispatch(getRandomNumber(callback))
        },
        setScore: ({score}) => {
            dispatch(setScore({score}))
        },
        clearScoreCard: () => {
            dispatch(clearScoreCard())
        }
    };
};

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

export default HomeContainer;