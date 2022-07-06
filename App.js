// import { View, Text, FlatList ,StatusBar, ActivityIndicator} from 'react-native'
// import React,{useEffect, useState} from 'react'
// import axios from 'axios';
// import { ListItem } from 'react-native-elements'

// import { Header } from 'react-native-elements';
// import SplashScreen from 'react-native-splash-screen';  // import library from react-native-splash-screen
// const App = () => {
//   const [loading, setLoading] = useState(true);


//   const [policies,setPolicies]=useState([])

//   const getPolicyData= async()=>
//   {
//    await axios.get('https://popp.undp.org//SitePages/POPPJSONData.aspx?RequestType=APPDATA').then(res=>
//     {
//       const policiesArea=res.data
//       // console.log('okkkv->>',policiesArea)
//    setPolicies(policiesArea)
//    console.log('polici area Array --> ',policies)
//     })

//   }

//   useEffect(() => {
//    SplashScreen.hide();
   
 
//     fetchData();
//     console.log('policiy ',policies)
//   }, []);
  
//   return (
//     <View>
//        <StatusBar
        
//        backgroundColor={'black'}
//         // barStyle={{default}}
//         // showHideTransition={statusBarTransition}
//        />
//       {/* <Header
 
//   centerComponent={{ text: 'UNDP POLICY AREAS', style: { color: '#fff',fontSize:20,marginTop:10,paddingBottom:10 } }}
// /> */}
// <View style={{alignContent:'center',padding:10,backgroundColor:'#023e8a'}}>
//   <Text style={ { color: '#fff',fontSize:20,marginTop:10,paddingBottom:10 ,textAlign:'center'} }>UNDP POLICY AREAS</Text>
// </View>
// {loading ? <ActivityIndicator/>
// : null}

// {
  
//   policies.map((item)=>
//   {
//     return(
//       <ListItem key={item.termID} bottomDivider>
      
//       <ListItem.Content>
//         <ListItem.Title>{<Drop}</ListItem.Title>
//       </ListItem.Content>
//       <ListItem.Chevron />
//     </ListItem>
//     )
//   })
// }
     
//     </View>
//   )
// }

// export default App