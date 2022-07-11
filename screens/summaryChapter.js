import { View, Text } from 'react-native'
import React from 'react'
import { NativeBaseProvider } from 'native-base';

import { WebView } from 'react-native-webview';
import { ScrollView } from 'native-base';
const Summary = ({route,navigation}) => {
  const  itemId  = route.params;
console.log("term id --> ",itemId)
  return (
    // <View><Text>hello</Text></View>
    <WebView
    source={{ uri: 'https://www.altamirahrm.com/en/privacy-policy' }}
    style={{ marginTop: 20 }}
  /> 
    // <NativeBaseProvider>
    //      <ScrollView>
           
      
    //   </ScrollView>
    // </NativeBaseProvider>
   
  )
}

export default Summary