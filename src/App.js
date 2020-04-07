import React from 'react';

import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import store from './stores/store';
import Home from './home';
import Create from './create';

let RootStack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen
            name="Home"
            component={Home}
            options={{title: 'Event List'}}
          />
          <RootStack.Screen
            name="Create"
            component={Create}
            options={{title: 'New Event'}}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;