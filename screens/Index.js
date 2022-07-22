import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  useWindowDimensions,
  StyleSheet,
<<<<<<< HEAD
  useColorScheme
=======
  FlatList,
>>>>>>> b8761275c7d9e7d1c0dafb85ebd4f446e53e26d1
} from 'react-native';
import React, {useState,useEffect} from 'react';
import {texts} from '../style/Text';
import Colors from '../style/Colors';
import css from '../style/GlobalStyle';
import {SearchBar} from 'react-native-elements';  
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';   
import CustomFlatList from './FlatList';
import {useTheme} from '@react-navigation/native'

{
  /*
This is dummy data to show list of item unde allpolicy tab
*/
}


const allpolicyData = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Mrunalio 1',
  },
  {
    id: '0',
    title:'Announcementt Search sections 2',
  },
  {
    id: '1',
    title:'Programme and Project Management',
  },
  {
<<<<<<< HEAD
    id: '58694a0f-3da1-471f-bd96-14785555deer',
    title: 'Third  policy 4',
  },
  {
    id: '58694a0f-3da1-471f-bd96-flfkf44fffff',
    title: 'Third  policy 5',
  },
  {
    id: '58694a0f-3da1-471f-bd96-14557fff1e29d72',
    title: 'Third  policy 6',
=======
    id: '2',
    title: 'Quality Standards for Programming',
  },
  {
    id: '3',
    title: 'Mamadou Ndaw,Teuku Rahmatsyah',
  },
  {
    id: '4',
    title: "Social and Environmental  Standards",
>>>>>>> b8761275c7d9e7d1c0dafb85ebd4f446e53e26d1
  },
];

{
  /*
This is dummy data to show list of item unde BookMarkPolicies tab
*/
}
const bookmarkdata = [
  {
    id: '1',
    title: 'Crisis Response',
  },
  {
    id: '2',
    title: 'Standard Operating Proce…mediate Crisis Response',
  },
  {
<<<<<<< HEAD
    id: '58694a0f-3da1-471f-bd96-145571e2f9d72',
    title: 'Third bookmark Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-14557re29d72',
    title: 'fourth bookmark Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1455761e29d72',
    title: 'Fifth bookmark Item',
  },
];

 {/**
   *renderScene method which returns a react element to render as the page for the tab
=======
    id: '3',
    title: 'Janthomas Hiemstra,Fabrizio Andreuzzi',
  },
  {
    id: '4',
    title: 'Financial Resources for Response',
  },
  {
    id: '5',
    title: 'Crisis Assessment and Coordination Resources',
  },
];

{
  /**
   * renderScene method which returns a react element to render as the page for the tab
>>>>>>> b8761275c7d9e7d1c0dafb85ebd4f446e53e26d1

   *@param   route as parameter      

   *@return  react element to render as the page for the tab .
 
*/
}




const Index = props => {
<<<<<<< HEAD


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

// layout variable use useWindowDimensions hooks  to provide width
  const layout = useWindowDimensions();
  const [searchtext, setSearchText] = useState('');
  const theme=useTheme();
  const isDark=useColorScheme();
 
// a number representing the index of the active route in the routes array
=======
  // layout variable use useWindowDimensions hooks  to provide width
  const layout = useWindowDimensions();
  const [searchtext, setSearchText] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  // a number representing the index of the active route in the routes array
>>>>>>> b8761275c7d9e7d1c0dafb85ebd4f446e53e26d1
  const [index, setIndex] = React.useState(0);
  // an array containing a list of route objects used for rendering the tabs
  const [routes] = React.useState([
    {key: 'first', title: 'All Policies'},
    {key: 'second', title: 'Bookmarked Policies'},
  ]);

  useEffect(() => {
    console.log('filter data ',filteredDataSource)
    console.log('master data ',masterDataSource)
     
    }, [])


    const renderScene = ({route}) => {
      switch (route.key) {
        case 'first':
          return (
            <View>
           
    
              <FlatList
                data={filteredDataSource}
                keyExtractor={(item, index) => index.toString()}
    
                renderItem={({item}) => {
                  return (
                    <View
                      style={{
                        paddingLeft: 10,
                        paddingRight: 10,
                        paddingVertical: 10,
                      }}>
                      <Text
                        style={{
                          fontSize: 12,
                          paddingLeft: 10,
                          color: Colors.Grey,
                        }}>
                        {item.title}
                      </Text>
                      <View
                        style={{height: 5, borderBottomWidth: 1, paddingLeft: 5}}
                      />
                    </View>
                  );
                }}
              />
            </View>
          );
    
        case 'second':
          return(
            <View>
         
    
            <FlatList
              data={filteredDataSource}
              keyExtractor={(item, index) => index.toString()}
    
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      paddingLeft: 10,
                      paddingRight: 10,
                      paddingVertical: 10,
                    }}>
                    <Text
                      style={{fontSize: 12, paddingLeft: 10, color: Colors.Grey}}>
                      {item.title}
                    </Text>
                    <View
                      style={{height: 5, borderBottomWidth: 1, paddingLeft: 5}}
                    />
                  </View>
                );
              }}
            />
          </View>
          );
          
        default:
          return null;
      }
    };
  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      console.log('filter data base ', filteredDataSource)
      console.log('masterdata base ' , masterDataSource)
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearchText(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearchText(text);
    }
  };


  return (
    <View style={[css.body,{backgroundColor:isDark==='dark'? Colors.DARK:Colors.LIGHT }]}>
      <View style={{backgroundColor:isDark==='dark'? Colors.DARK:Colors.LIGHT }}>
        <View style={css.headerTitleView}>
<<<<<<< HEAD
          <Text
            style={css.customHeaderText}>
            {texts.IndexScreen}
          </Text>
=======
          <Text style={css.customHeaderText}>INDEXES</Text>
>>>>>>> b8761275c7d9e7d1c0dafb85ebd4f446e53e26d1
        </View>
        {/*  Top search bar */}
        <SearchBar
          value={searchtext}
          onChangeText= {
          (text)=>searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction('')}

          lightTheme
          theme={ isDark==='dark'?'dark':'default'}
          placeholder="Search"
<<<<<<< HEAD
          inputContainerStyle={{backgroundColor:isDark==='dark'?Colors.Grey: Colors.LIGHT, height: 30}}
          containerStyle={[css.SearchBarContainer,{backgroundColor:isDark==='dark'?Colors.Grey:Colors.LIGHT,}]}
          inputStyle={{
            backgroundColor:isDark==='dark'?Colors.Grey: Colors.LIGHT,
            color:isDark==='dark'?'#ECECEC':Colors.DARK,
          
          
          
=======
          inputContainerStyle={{backgroundColor: Colors.LIGHT, height: 30}}
          containerStyle={css.SearchBarContainer}
          inputStyle={{
            backgroundColor: Colors.LIGHT,
>>>>>>> b8761275c7d9e7d1c0dafb85ebd4f446e53e26d1
          }}
          leftIconContainerStyle={{
            // color: isDark==='dark'?Colors.Grey:Colors.LIGHT,
          }}
          placeholderTextColor={isDark==='dark'?Colors.placeholderTextColor:Colors.DARK}
          
          clearIcon={{
            type: 'material-community',
            color: Colors.DARK,
            // backgroundColor: Colors.LIGHT,
            name: 'close',
            size: 25,
            // containerStyle: {
            //   backgroundColor: Colors.LIGHT,
            // },
          }}
          searchIcon={{
            size: 25,
          }}
        />
      </View>
      {/* Container component responsible for rendering and managing tabs */}

      <TabView
        navigationState={{index, routes}}
        swipeEnabled={false}
        renderScene={renderScene}
      
        renderTabBar={props => (
          <TabBar


          onTabPress={({ route, preventDefault }) => {
            if (route.key === 'first') {     
                      // Do something else\             
                       console.log('hello in all policies')


                      setFilteredDataSource(allpolicyData)
                      setMasterDataSource(allpolicyData)
            }
            else{     
              // Do something else
              console.log('hello in bookmark')
              setFilteredDataSource(bookmarkdata)
              setMasterDataSource(bookmarkdata)
    }
          }}
            {...props}
            renderLabel={({focused, route}) => {
              if (focused) {
                return <Text style={{color:isDark==='dark'?Colors.LIGHT: Colors.LIGHT}}>{route.title}</Text>;
              } else {
                return (
                  <Text style={{color:isDark==='dark'?Colors.LIGHT:Colors.PRIMARY}}>{route.title}</Text>
                );
              }
            }}
          
            
            indicatorContainerStyle={{
              backgroundColor:isDark==='dark'?Colors.indicatorContainerStyle:Colors.LIGHT
            ,
            borderEndWidth:2,
            borderEndColor:Colors.PRIMARY
            
            }}
            indicatorStyle={[css.indicatorStyle,{backgroundColor:isDark==='dark'? Colors.Grey :Colors.PRIMARY}]}
            style={css.tabBar}
          />
        )}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        style={{
          margin: 10,
          backgroundColor: isDark==='dark'? Colors.tabStyle: Colors.LIGHT
        }}
      />
    </View>
  );
};

export default Index;
