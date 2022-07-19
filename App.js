import {View, Text, FlatList, StatusBar, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {MyTabs} from './screens/Tabnavigation';
import {NavigationContainer} from '@react-navigation/native';

// import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { MyTabs } from './screens/Tabnavigation';
import SplashScreen from 'react-native-splash-screen'; // import library from react-native-splash-screen

const Stack=createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
 
  <NavigationContainer>
        <MyTabs />
      </NavigationContainer>

  



  );
};

export default App;
