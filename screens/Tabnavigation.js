import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {useColorScheme,Appearance} from 'react-native';

import { IconButton } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Navigation from './navigation';
import React, {useState, useEffect} from 'react';
import Home from './Home';
import Index from './Index';
import WhatsNew from './WhatsNew';
import Recent from './Recent';
import Colors from '../style/Colors';
import css from '../style/GlobalStyle';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewPolicyDetails from './newPoilcyDetail';
import { texts } from '../style/Text';
const Tab = createMaterialBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();



{/**
   * This is the SettingsStackScreen used to stack navigation of whatsnew screen and detailsscreen .
   * @param nothing

   * @return stack navigator component
 
*/}
const  SettingsStackScreen=() =>{
  return (
    <SettingsStack.Navigator initialRouteName='WhatsNew '  screenOptions={{ headerTitleAlign: 'center',
    headerTitle: texts.WhatsNew,
    headerTintColor: Colors.LIGHT,
    headerStyle: {
      backgroundColor: Colors.PRIMARY,
    },
    headerTitleStyle: {
      fontSize: 20,
      color: Colors.LIGHT,
      fontWeight: '300',
      fontFamily: 'MYRIADPROREGULAR',
    },}}>
      <SettingsStack.Screen name="WhatsNew" component={WhatsNew} />
      <SettingsStack.Screen name="NewPolicyDetails" component={NewPolicyDetails} 
      options={{
        headerTitle:'Hello'
      }}
      
      />
    </SettingsStack.Navigator>
  );
}



{/**
   * This is the MyTabs used to show bottom tab navigation .
   * @param nothing

   * @return navigator and bottom tab screen
 
*/}

export const  MyTabs=()=> {
 
  return (

    <Tab.Navigator
      initialRouteName="navigation"
      activeColor={Colors.LIGHT}
      barStyle={{ backgroundColor: Colors.PRIMARY }}
      screenOptions={{
        tabBarShowLabel:false,

      }}
    >

      <Tab.Screen
        name="navigation"
        component={Navigation}
        
        
        options={{
          
          tabBarLabel: 'Home',
          tabBarShowLabel:false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={Colors.LIGHT} size={24} />

          ),

        }}
      />
      
      <Tab.Screen
        name="Index"
        component={Index}
        
        options={{
          tabBarShowLabel:true,
       
          tabBarIcon: () => (
            <EvilIcons name="search" color={Colors.LIGHT} size={25} />
            ),
        }}
      />
        <Tab.Screen
        name="Whatsnew"
        component={SettingsStackScreen}
        options={{
          
          tabBarIcon: () => (
            <Ionicons name="megaphone-outline" color={Colors.LIGHT} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Recent"
        component={Recent}
        options={{
          tabBarIcon: ({ color }) => (
            <EvilIcons name="clock" color={Colors.LIGHT} size={27} />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
}