import { View, Text } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';
import { urls } from '../style/URL';


{/**
   * This is the SummaryChapter method used to show webview of give url .
   * @param  .nothing

   * @return webview of give url
 
*/}

const SummaryChapter = () => {
  return (
    
    <WebView source={{uri:urls.webviewURl}} />
  )
}

export default SummaryChapter