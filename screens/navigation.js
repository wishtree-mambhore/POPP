import {View, Text, useColorScheme} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Sum from './PolicyListingView';
import Chapters from './Chapters';
import Home from './Home';
import Colors from '../style/Colors';
import css from '../style/GlobalStyle';
import SummaryChapter from './SummaryChapter';
import StepScreen from './stepScreen';
import ExplanatoryScreen from './ExplanatoryScreen';
import Index from './Index';
import NewPolicyDetails from './newPoilcyDetail';
import WhatsNew from './WhatsNew';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MyTabs} from './Tabnavigation';
const Stack = createNativeStackNavigator();
{
  /**
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
      <Stack.Screen
        name="Sum"
        component={Sum}
        options={({route}) => ({title: route.params.title})}
      />

      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SummaryChapter" component={SummaryChapter} />
      <Stack.Screen name="StepScreen" component={StepScreen} />
      <Stack.Screen name="ExplanatoryScreen" component={ExplanatoryScreen} />
      <Stack.Screen name="Chapters" component={Chapters} />
    </Stack.Navigator>
  );
};

export default Navigation;
