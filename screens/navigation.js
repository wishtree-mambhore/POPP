import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Announcement from './Announcement';
import Sum from './summaryChapter';
import Chapters from './chapters';
import Recent from './Recent'
import { MyTabs } from './Tabnavigation';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator
    initialRouteName='MyTab'
    screenOptions={{
        headerShown:false
        
    }}
    >
  <Stack.Screen name='Sum'  component={Sum}/>
  <Stack.Screen name='MyTab'  component={MyTabs}/>
  <Stack.Screen name='Chapters'  component={Chapters}/>

    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Navigation