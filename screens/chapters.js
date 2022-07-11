import { View, Text,TouchableOpacity ,StyleSheet} from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from '../style/Colors';
import css from '../style/GlobalStyle';
import { FlatList } from 'native-base';
import { NativeBaseProvider } from 'native-base';

const Chapters = (props) => {
    const productData = props?.route?.params?.data;
    // const [chapterArray,setChapterArray] = useState([productData])
    console.log('product data ',)
  return (
        <View style={css.body}>
           <View style={{backgroundColor:'#01426c',color:Colors.LIGHT,flexDirection:'row',justifyContent:'space-between',alignContent:'center',alignItems:'center',alignSelf:'center',padding:5,width:'100%'}} >
            <Ionicons name='arrow-back' size={25} color={Colors.LIGHT}  onPress={(()=> props.navigation.goBack())}/>
          <Text  numberOfLines={1} ellipsizeMode={'tail'} style={{fontFamily:'MYRIADPROREGULAR',color:Colors.LIGHT,padding:10,fontSize:18,textAlign:'center',}}>{productData.name}</Text>
           </View>
        <View style={css.accordianContainer}>
          {/* Map array data  */}

          {    productData.subjects.map(item => (
            <TouchableOpacity
            style={{}}
              key={item.name}>
             <Text style={{fontSize:15,padding:10,color:'#01426c',textTransform:'uppercase'}}>{item.name}</Text>
             <View style={css.accordianHorizontal} />

            </TouchableOpacity>
          ))}
        </View>
         

    </View>
    
  )
}

export default Chapters