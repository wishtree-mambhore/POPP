import {View, Text, FlatList, StatusBar, ActivityIndicator,useColorScheme,Appearance, } from 'react-native';
import React, {useEffect, useState, } from 'react';
import {MyTabs} from './screens/Tabnavigation';
import {NavigationContainer,DarkTheme,DefaultTheme , useTheme} from '@react-navigation/native';
import Navigation from './screens/navigation';
// import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { MyTabs } from './screens/Tabnavigation';
import SplashScreen from 'react-native-splash-screen'; // import library from react-native-splash-screen

import { Provider as PaperProvider, DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme,useTheme as PaperUseTheme } from 'react-native-paper';
const App = () => {

  useEffect(() => {
    SplashScreen.hide();
    


    

  }, []);

  const isDark= useColorScheme()



  return (

<NavigationContainer   >
        <MyTabs  />
      </NavigationContainer>



  



  );
};

export default App;
