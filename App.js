import {View, Text, FlatList, StatusBar, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {MyTabs} from './screens/Tabnavigation';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {store} from './redux/store'


import SplashScreen from 'react-native-splash-screen'; // import library from react-native-splash-screen
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>

  <NavigationContainer>
        <MyTabs />
      </NavigationContainer>

 
    
    </>
  );
};

export default App;
