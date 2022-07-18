import { View, Text } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';
import { urls } from '../style/URL';




const SummaryChapter = () => {
  return (
    <WebView source={{uri:urls.webviewURl}} />
  )
}

export default SummaryChapter