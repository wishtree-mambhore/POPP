import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { IconButton } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Navigation from './navigation';
import React, {useState, useEffect} from 'react';
import Home from './Home';
import Index from './Index';
import Announcement from './Announcement';
import WhatsNew from './WhatsNew';
import Recent from './Recent';
import Colors from '../style/Colors';
const Tab = createMaterialBottomTabNavigator();



{/**
   * This is the MyTabs used to show bottom tab navigation .
   * @param nothing

   * @return navigator and bottom tab screen
 
*/}

export const  MyTabs=()=> {
  return (

    <Tab.Navigator
      initialRouteName="Navigation"
      activeColor={Colors.LIGHT}
      barStyle={{ backgroundColor: Colors.PRIMARY }}
      screenOptions={{
        tabBarShowLabel:false,
        
        
      
      }}
      
      
    >

      <Tab.Screen
        name="Navigation"
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
      
          tabBarIcon: () => (
            <EvilIcons name="search" color={Colors.LIGHT} size={25} />
            ),
        }}
      />
        <Tab.Screen
        name="Announcement"
        component={Announcement}
        options={{
          
          tabBarIcon: () => (
            <Ionicons name="megaphone-outline" color={Colors.LIGHT} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="WhatsNew"
        component={WhatsNew}
        options={{
          tabBarIcon: ({ color }) => (
            <EvilIcons name="clock" color={Colors.LIGHT} size={27} />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
}