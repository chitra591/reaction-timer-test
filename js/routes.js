import {createAppContainer, createStackNavigator} from 'react-navigation';

import WelcomeScreen from './welcome/components/WelcomeScreen';
import HomeContainer from './home/components/HomeContainer';

const AppNavigator = createStackNavigator({
    Welcome: {screen: WelcomeScreen},
    Home: {screen: HomeContainer}
},
{
    headerMode: 'none',
    cardStyle: { backgroundColor: '#fbf7f5' }
});
export const AppContainer = createAppContainer(AppNavigator);