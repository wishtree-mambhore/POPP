
{
  /**
   * This is the screen  design to show full description of new policy 
   * navigate from whats new screen
   
   */
}

import { View, Text,Dimensions,useColorScheme } from 'react-native'
import React ,{useState}from 'react'
import css from '../style/GlobalStyle';
import Colors from '../style/Colors';
import { texts } from '../style/Text';
import  {useTheme} from '@react-navigation/native'


const NewPolicyDetails = props => {
    const policyTitle = props?.route?.params?.title;
    const policyDetail = props?.route?.params?.desc;
    const effectiveDate=props?.route?.params?.date;
    const WIDTH = Dimensions.get('window').width;
    const  theme=useTheme();
    const isDark=useColorScheme();



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
    <View style={{backgroundColor:isDark==='dark'?Colors.DARK:Colors.LIGHT,flex:1}}>
         
      <Text style={{color:isDark==='dark'?Colors.LIGHT: Colors.DARK, fontSize:14 ,textTransform:'uppercase',padding:10}}>{effectiveDate}</Text>
      <Text style={[css.newPolicyDetailDesc,{color:isDark==='dark'?Colors.Grey: Colors.DARK}]}>{policyDetail}</Text>
      <View style={css.newPolicyDetailHorizontal}/>
      <Text style={[css.newPolicyDetailDocument,{color:isDark==='dark'?Colors.LIGHT: Colors.DARK}]}>{texts.Document}</Text>
      <Text style={[css.newPolicyDetailDocumentLink,{ color:isDark==='dark'?Colors.btnColor:Colors.PRIMARY}]}>{policyTitle}</Text>
    </View>
  )
}

export default NewPolicyDetails