import { View, Text } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

const SummaryChapter = () => {
  return (
    <WebView source={{uri:'https://popp.undp.org/SitePages/POPPChapter.aspx?TermID=b2e8a5ec-7e30-4702-9293-95a47fb4411c&Menu=BusinessUnit&Beta=0'}} />
  )
}

export default SummaryChapter