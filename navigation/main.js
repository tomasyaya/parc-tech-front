import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './screens/Home';
import Splash from './screens/Splash';
import ErrScreen from './screens/ErrScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Splash: {
    screen: Splash,
  },
  ErrScreen: {
    screen: ErrScreen
  }
}, {
  initialRouteName: 'Splash',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#bafcb0',
    } 
  },
  mode: 'modal'
})




export default createAppContainer(AppNavigator)