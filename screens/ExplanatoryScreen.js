import { View, Text,Dimensions } from 'react-native'
import React from 'react'
import Colors from '../style/Colors';
const WIDTH = Dimensions.get('window').width;

const ExplanatoryScreen = (props) => {

    React.useLayoutEffect(() => {
        
        props.navigation.setOptions({
          headerTitle: props => (
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              {...props}
              style={{
                color: 'white',
                fontFamily: 'MARIADPROREGULAR',
                fontSize: 18,
                width: WIDTH - 150,
                textAlign:'center'
              }}>
                Explanatory Notes
            </Text>
          ),
    
          headerStyle: {
            backgroundColor: Colors.PRIMARY,
            //Set Header color
          },
        
        });
      }, [props.navigation]);
   
  return (
    <View>
      <Text>ExplanatoryScreen</Text>
    </View>
  )
}

export default ExplanatoryScreen