<<<<<<< HEAD
import { View, Text ,FlatList,useColorScheme} from 'react-native'
import React from 'react'
=======
import { View, Text ,FlatList} from 'react-native'
import React, { useState } from 'react'
>>>>>>> b8761275c7d9e7d1c0dafb85ebd4f446e53e26d1
import css from '../style/GlobalStyle'
import Colors from '../style/Colors'
import  {useTheme} from '@react-navigation/native'


<<<<<<< HEAD
const CustomFlatList = ({data}) => {
  const isDark=useColorScheme();

   const theme=useTheme();
=======
const CustomFlatList = ({data,text}) => {
  console.log(text)
    const [searchText,setsearchText]=useState(text)
    const [searchData,setsearchData]=useState(data)
    const [masterDataSource, setMasterDataSource] = useState(data);

   
  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = searchData.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setsearchData(newData);
      setsearchText(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setsearchData(masterDataSource);
      setSearch(text);
    }
  };


>>>>>>> b8761275c7d9e7d1c0dafb85ebd4f446e53e26d1
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
