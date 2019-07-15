import React, {Component} from 'react';
import {BackHandler} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {AppContainer} from './js/routes';
import rootReducer from './js/reducer';

const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));

export default class App extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
      return true;
  }

  render() {
    console.disableYellowBox = true;
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}