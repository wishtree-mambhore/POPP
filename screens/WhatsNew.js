import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  useColorScheme
} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import axios from 'axios';
import {texts} from '../style/Text';
import css from '../style/GlobalStyle';
import Colors from '../style/Colors';
import { useTheme } from '@react-navigation/native';

const WhatsNew = props => {
  {
    /**
     * This is the wait function is used set timout for pull to refresh controller eg. 2 sec loader will show
     * @return  set timout seconds for loader .
     * @param timeout type integer how much time do you want the loader
     */
  }
  const wait = timeout => {
    // Defined the timeout function for testing purpose
    return new Promise(resolve => setTimeout(resolve, timeout));
  };


  {
    /**
     * This is the onRefresh function is used set refresh state as true for pull to refresh controller
     * @return  nothing .
     */
  }
  const onRefresh = useCallback(() => {
    setIsRefreshing(true);
    wait(2000).then(() => setIsRefreshing(false));
  }, []);

  const [users, setUSers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [errorMsg, setErrormsg] = useState('');
  const [page, setPage] = useState(1);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const theme=useTheme();
  const isDark=useColorScheme();



  {
    /**
     * This is the loadUsers function is used load data from api url
     * @return  response from api call  .
     */
  }
  const loadUsers = async () => {
    const temppage = page;
    setLoading(true);
    axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`).then(response => {
        setPage(page + 1);
        console.log('page no ->', page);
        setUSers([...users, ...response.data]);

        setErrormsg('');
      })
      .catch(e => {
        console.log('erro ', e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  {
    /**
     * This is the renderFooter function is used footer button to load more data
     * @return  button.
     */
  }

  const renderFooter = () => {
    return (
      //Footer View with Load More button

      <View style={css.loadmoreView}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={loadUsers}
          //On Click of button load more data

          style={css.loadmoreToucview}>
          <Text style={css.loadmorebtn}>{texts.LoadMore}</Text>

          {isLoading ? (
            <ActivityIndicator color={Colors.LIGHT}style={{marginLeft: 8}} />
          ) : null}
        </TouchableOpacity>
      </View>
    );
  };


  {
    /**
     * This is the useEffect hook is used to load data from loadUsers method
     * @return  data .
     * @param nothing
     */
  }
 
  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <View style={[css.body,{backgroundColor:isDark==='dark'?Colors.DARK:Colors.LIGHT}]}>
    
      {!isLoading ? (
        <FlatList
          refreshing={isRefreshing} // Added pull to refesh state
          onRefresh={onRefresh}   
          onEndReached={renderFooter}
          onEndReachedThreshold={1}
          ListFooterComponent={renderFooter}
          data={users}
          renderItem={item => {
            return (
              <View style={css.WhatsnewView}>
                <TouchableOpacity onPress={()=>props.navigation.navigate('NewPolicyDetails',{title:item.item.title,desc:item.item.body,date:texts.EffectiveDate})}>
                  <Text style={[css.whtsnewTitle,{color:isDark==='dark'?Colors.LightGray:Colors.PRIMARY}]}>{item.item.title}</Text>
                  <Text style={[css.desc,{color:isDark==='dark'?'#A4B494':Colors.DARK}]}>{item.item.body}</Text>
                  <Text numberOfLines={3} style={[css.whtsnewEffectiveDate,{color:isDark==='dark'?'#E7F6F2':Colors.PRIMARY}]}>
                    {' '}
                   {texts.EffectiveDate}
                  </Text>
                  <View style={css.whtsnewHorizontal} />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
};

export default WhatsNew;
