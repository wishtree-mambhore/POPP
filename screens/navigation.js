import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Announcement from './Announcement';
import Sum from './PolicyListingView';
import Chapters from './SubjectGroupView';
import Home from './Home';
import Colors from '../style/Colors';
import css from '../style/GlobalStyle';
import SummaryChapter from './SummaryChapter';
import StepScreen from './stepScreen';
import ExplanatoryScreen from './ExplanatoryScreen';
import Index from './Index';
import { MyTabs } from './Tabnavigation';

const Stack = createNativeStackNavigator();
{  /**
   * This is the Navigation function is used to create stack of screen and use for navigation of screen.
   * @param . nothing
   * @return Navigatior function from createNativeStackNAvigator .
   */
}

const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitle: 'UNDP POLICY AREAS',
        headerTintColor: Colors.LIGHT,
        headerStyle: {
          backgroundColor: Colors.PRIMARY,
        },
        headerTitleStyle: {
          fontSize: 20,
          color: Colors.LIGHT,
          fontWeight: '300',
          fontFamily: 'MYRIADPROREGULAR',
        },
      }}>
      <Stack.Screen name='Sum'  component={Sum}
   options={{
    headerTitleStyle:
    {
    maxWidth:250
    }
   }}
   
   />



   <Stack.Screen name='Mytab' component={MyTabs} 
   options={{
    header:true,
    headerTitle:'hello'
   }}
   
   />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Chapters" component={Chapters} />
      <Stack.Screen name="SummaryChapter" component={SummaryChapter} />
      <Stack.Screen name="StepScreen" component={StepScreen} />
      <Stack.Screen name="ExplanatoryScreen" component={ExplanatoryScreen} />
      <Stack.Screen name="Index" component={Index} 
      options={{
        title:'hello'

      }}
      />


    </Stack.Navigator>
  );
};

export default Navigation;
