/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StartPage from './components/StartPage.js';
import SignUp from './components/SignUp.js';
import { createStackNavigator } from '@react-navigation/stack';

const App = () => {
  const Stack = createStackNavigator();
  
  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' >
        <Stack.Screen name='Home' component={StartPage} options={{headerShown: false}}/>
        <Stack.Screen name='SignUp' component={SignUp} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
