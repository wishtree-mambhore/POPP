import { View, Text ,
      Dimensions,
      TouchableOpacity,
} from 'react-native'
import React from 'react'
import Colors from '../style/Colors';
import css from '../style/GlobalStyle';
const WIDTH = Dimensions.get('window').width;

const StepScreen = (props) => {
    const stepname = props?.route?.params?.title;
    const procTitle = props?.route?.params?.procTitle;
    const brief =props?.route?.params?.brief

    console.log(

" proce title ===>",procTitle,'brief -->',brief

    )

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
              {stepname}{' '}
            </Text>
          ),
    
          headerStyle: {
            backgroundColor: Colors.PRIMARY,
            //Set Header color
          },
        
        });
      }, [props.navigation]);
  return (
    <View style={{margin:15}}>
      <Text style={{paddingBottom:5,fontSize:15 ,color:Colors.DARK}}>PROCEDURE TITLE</Text>
      <Text  style={{paddingBottom:5,fontSize:13}}>{procTitle}</Text>
      <Text  style={{paddingBottom:5,fontSize:15,color:Colors.DARK}}>{stepname}</Text>
      <Text  style={{paddingBottom:7,fontSize:13}}>{brief}</Text>
      <Text style={{paddingBottom:5,fontSize:15,color:Colors.DARK}}>RESPONSIBLE PARTY</Text>
      <Text  style={{paddingBottom:5,fontSize:13}}>{procTitle}</Text>
      <View style={{marginBottom:7}}>
      <Text style={{paddingBottom:7,fontSize:15,color:Colors.DARK}}>TEMPLATE/GUIDELINE</Text>
      <TouchableOpacity>
        <Text style={{color:Colors.PRIMARY,padding:5}}>Document Link</Text>
      </TouchableOpacity>
      <TouchableOpacity >
      <Text style={{color:Colors.PRIMARY,padding:5}}>Document Link</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={{color:Colors.PRIMARY,padding:5}}>Document Link</Text>
      </TouchableOpacity>
      </View>
      <TouchableOpacity style={{backgroundColor:Colors.PRIMARY ,alignItems:'center',padding:10}} onPress={()=>props.navigation.navigate('ExplanatoryScreen')}>
        <Text style={{color:Colors.LIGHT}}>   View Explanatory Notes   </Text>
      </TouchableOpacity>
     

    </View>
  )
}

export default StepScreen