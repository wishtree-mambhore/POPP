import { View, Text ,FlatList} from 'react-native'
import React, { useState } from 'react'
import css from '../style/GlobalStyle'
import Colors from '../style/Colors'

const CustomFlatList = ({data,text}) => {
  console.log(text)
    const [searchText,setsearchText]=useState(text)
    const [searchData,setsearchData]=useState(data)
    const [masterDataSource, setMasterDataSource] = useState(data);

   
 

  return (
  <FlatList
  data={data}
  renderItem={({item})=>
{
    return(
        <View style={{paddingLeft:10,paddingRight:10,paddingVertical:10}}>
    <Text style={{fontSize:12,paddingLeft:10,color:Colors.Grey}}>{item.title}</Text>
    <View style={{height:5,borderBottomWidth:1,paddingLeft:5}}/>

        </View>
    )
}}
  
  />
  )
}

export  default React.memo(CustomFlatList);
