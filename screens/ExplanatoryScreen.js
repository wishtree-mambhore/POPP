import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import Colors from '../style/Colors';
import {texts} from '../style/Text';
const WIDTH = Dimensions.get('window').width;

const ExplanatoryScreen = props => {


// this function used to show header 
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitle: props => (
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          {...props}
          style={{
            color: Colors.LIGHT,
            fontFamily: 'MARIADPROREGULAR',
            fontSize: 18,
            width: WIDTH - 150,
            textAlign: 'center',
          }}>
          {texts.ExplanatoryNotes}
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
      <Text>{texts.ExplanatoryNotes}</Text>
    </View>
  );
};

export default ExplanatoryScreen;
