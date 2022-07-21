import {View, Text, FlatList, StatusBar, ActivityIndicator,useColorScheme,Appearance } from 'react-native';
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
    if(Appearance.getColorScheme()=='dark')
    {
      setMode(true)
    }


    

  }, []);

  const [mode,setMode] = useState(false)

const CustomDefaulTheme={
  ...DefaultTheme,
  ...PaperDarkTheme,
  colors:
  {
    ...DefaultTheme.colors,
    ...PaperDefaultTheme.colors
  }

}

const CustomDarkTheme={
  ...DefaultTheme,
  ...PaperDarkTheme,
  colors:
  {
    ...DefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    background:'black'
  }

}

  return (

<NavigationContainer theme={mode?DarkTheme: DefaultTheme} >
        <MyTabs />
      </NavigationContainer>



  



  );
};

export default App;
