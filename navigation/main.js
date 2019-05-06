import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './screens/Home';
import Favorite from './screens/Favorite';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Favorite: {
    screen: Favorite,
  }
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'green',
    },
    title: 'Nav',
  },
  mode: 'modal'
})




export default createAppContainer(AppNavigator)