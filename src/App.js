import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './home';
import Detail from './detail';
import Create from './create';

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Detail: Detail,
    Create: Create,
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
