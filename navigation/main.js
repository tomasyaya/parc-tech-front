import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './screens/Home';
import Splash from './screens/Splash';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Splash: {
    screen: Splash,
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