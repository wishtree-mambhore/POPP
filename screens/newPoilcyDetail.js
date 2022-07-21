
{
  /**
   * This is the screen  design to show full description of new policy 
   * navigate from whats new screen
   
   */
}

import { View, Text,Dimensions } from 'react-native'
import React ,{useState}from 'react'
import css from '../style/GlobalStyle';
import Colors from '../style/Colors';
import { texts } from '../style/Text';


const NewPolicyDetails = props => {
    const policyTitle = props?.route?.params?.title;
    const policyDetail = props?.route?.params?.desc;
    const effectiveDate=props?.route?.params?.date;
    const WIDTH = Dimensions.get('window').width;



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
            {policyTitle}
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
         
      <Text style={{color:Colors.DARK, fontSize:14 ,textTransform:'uppercase',padding:10}}>{effectiveDate}</Text>
      <Text style={css.newPolicyDetailDesc}>{policyDetail}</Text>
      <View style={css.newPolicyDetailHorizontal}/>
      <Text style={css.newPolicyDetailDocument}>{texts.Document}</Text>
      <Text style={css.newPolicyDetailDocumentLink}>{policyTitle}</Text>
    </View>
  )
}

export default NewPolicyDetails