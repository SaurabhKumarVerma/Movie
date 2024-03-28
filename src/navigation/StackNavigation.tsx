import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ScreenName} from '../types/ScreenType/ScreenName';
import Home from '../component/Home/Home';

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name={ScreenName.HOME} component={Home} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
