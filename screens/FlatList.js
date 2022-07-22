import { View, Text ,FlatList,useColorScheme} from 'react-native'
import React from 'react'
import css from '../style/GlobalStyle'
import Colors from '../style/Colors'
import  {useTheme} from '@react-navigation/native'


const CustomFlatList = ({data}) => {
  const isDark=useColorScheme();

   const theme=useTheme();
  return (
  <FlatList
  data={data}
  renderItem={({item})=>
{
    return(
        <View style={{paddingLeft:10,paddingRight:10,paddingVertical:10}}>
    <Text style={{fontSize:12,paddingLeft:10,color:isDark==='dark'? '#ECECEC': Colors.Grey}}>{item.title}</Text>
    <View style={{height:5,borderBottomWidth:1,paddingLeft:5}}/>

        </View>
    )
}}
  
  />
  )
}

export default React.memo(CustomFlatList);
