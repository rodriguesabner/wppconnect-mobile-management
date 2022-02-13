import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from '../screens/Main';

const StackRoutes = createNativeStackNavigator();

const Stack = () => {
  return (
    <StackRoutes.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}
      initialRouteName={'OnBoarding'}>
      <StackRoutes.Screen name="Main" component={Main} />
    </StackRoutes.Navigator>
  );
};

export default Stack;
