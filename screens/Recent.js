import {View, Text, FlatList, TouchableOpacity,useColorScheme} from 'react-native';
import React, {useState, useEffect} from 'react';
import {texts} from '../style/Text';
import axios from 'axios';
import css from '../style/GlobalStyle';
import {urls} from '../style/URL';
import Colors from '../style/Colors';

const Recent = (props) => {
  const isDark=useColorScheme()

 
  {
    /*  
     * This is the recent dummy data in array  
    
     */
  }

  const recent = [
    {
      id: 1,
      date: '2024-01-01',
      titles: [
        {
          name: 'Private Sector Partnerships',
          time: '12:05',
        },
        {
          name: 'Private Sector Partnerships',
          time: '12:05',
        },
        {
          name: 'Private Sector Partnerships',
          time: '12:05',
        },
        {
          name: 'Private Sector Partnerships',
          time: '12:05',
        },
      ],
    },
    {
      id: 2,
      date: '2024-01-01',
      titles: [
        {
          name: 'Private Sector Partnerships',
          time: '12:05',
        },
        {
          name: 'Public Sector Partnerships',
          time: '12:05',

        },
        {
          name: 'Private Announcment Team',
          time: '12:05',
        },
        {
          name: 'Quality Standard Partnerships',
          time: '12:05',
        },
      ],
    },
    {
      id: 3,
      date: '2024-01-01',
      titles: [
        {
          name: 'Private Sector Partnerships',
          time: '12:05',
        },
        {
          name: 'Private Sector Partnerships',
          time: '12:05',
        },
        {
          name: 'Private Sector Partnerships',
          time: '12:05',
        },
      ],
    },
  ];

  return (
    <View style={{backgroundColor:isDark==='dark'?Colors.DARK:Colors.LIGHT}}>
      <View style={css.headerTitleView}>
        <Text style={css.customHeaderText}>{texts.Recent}</Text>
      </View>

      {
     /*  
     * This is the Flat list  from react-native to list of recent data
     */
     }

      <FlatList
        data={recent}
        keyExtractor={item => item.id}
        renderItem={(item, index) => {
          return (
            <View key={index} style={[css.body, css.recentView]}>
              <View key={item.id} style={[css.recentDateTextView]}>
                <Text style={[css.recentDateText]}>{item.item.date}</Text>
              </View>
              {item.item.titles.map(item => {
                return (
                  <View key={index}>
                    <TouchableOpacity onPress={()=>{props.navigation.navigate('Sum',{title:item.name})}}>
                    <Text style={[css.recentPolicyText,{color:isDark==='dark'? null:Colors.DARK}]}>{item.name}</Text>
                    <Text numberOfLines={1} style={[css.lastAccessed,{color:isDark==='dark'? null:Colors.DARK}]}>
                      {' '}
                      LAST ACCESSED ON {item.time}
                    </Text>
                    <View style={css.recentViewHorizantal} />
                    </TouchableOpacity>
                    
                  </View>
                );
              })}
            </View>
          );
        }}
      />
    </View>
  );
};

export default Recent;
