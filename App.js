import { View, Text, FlatList ,StatusBar, ActivityIndicator} from 'react-native'
import React,{useEffect, useState} from 'react'
import { MyTabs } from './screens/Tabnavigation';
import axios from 'axios';
import { ListItem } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
import { Header } from 'react-native-elements';
import SplashScreen from 'react-native-splash-screen';  // import library from react-native-splash-screen
const App = () => {
    useEffect(() => {
           SplashScreen.hide();
           
         
          }, []);

  return (
    <NavigationContainer>
         <MyTabs/>
  
    </NavigationContainer>
  )
   
}

export default App