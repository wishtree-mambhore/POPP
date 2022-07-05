import { View, Text } from 'react-native'
import React,{useEffect} from 'react'
import SplashScreen from 'react-native-splash-screen';  // import library from react native version 3.3.0
const App = () => {
  useEffect(() => {
   SplashScreen.hide();
  }, []);
  
  return (
    <View>
      <Text>App</Text>
      <Text>Feature branch added</Text>
    </View>
  )
}

export default App