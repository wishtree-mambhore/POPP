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
// import Offline from './offiline';
const Tab = createMaterialBottomTabNavigator();

export const  MyTabs=()=> {
  return (

    <Tab.Navigator
      initialRouteName="Home"
      activeColor="white"
      barStyle={{ backgroundColor: '#01426c' }}
      screenOptions={{
        tabBarShowLabel:false
      }}
      
    >

      {/* <Tab.Screen 
      name='Navigation'
      component={Navigation}
      /> */}
      <Tab.Screen
        name="Home"
        component={Home}
        
        
        options={{
          tabBarLabel: 'Home',
          tabBarShowLabel:false,
          tabBarIcon: ({ color, size }) => (
            // <IconButton icon={'home-outline'} color="white" size={25} />
            <Ionicons name="home-outline" color={'white'} size={24} />

          ),

        }}
      />
      <Tab.Screen
        name="Index"
        component={Index}
        options={{
          // tabBarLabel: 'Updates',
          tabBarIcon: () => (
            <EvilIcons name="search" color={'white'} size={25} />
            ),
        }}
      />
        <Tab.Screen
        name="Announcement"
        component={Announcement}
        options={{
          // tabBarLabel: 'Updates',
          
          tabBarIcon: () => (
            <Ionicons name="megaphone-outline" color={'white'} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="WhatsNew"
        component={WhatsNew}
        options={{
          tabBarIcon: ({ color }) => (
            <EvilIcons name="clock" color={'white'} size={27} />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
}