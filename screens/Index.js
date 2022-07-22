import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  useWindowDimensions,
  StyleSheet,
  FlatList,
} from 'react-native';
import React, {useState,useEffect} from 'react';
import {texts} from '../style/Text';
import Colors from '../style/Colors';
import css from '../style/GlobalStyle';
import {SearchBar} from 'react-native-elements';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import CustomFlatList from './FlatList';

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

   *@param   route as parameter      

   *@return  react element to render as the page for the tab .
 
*/
}




const Index = props => {
  // layout variable use useWindowDimensions hooks  to provide width
  const layout = useWindowDimensions();
  const [searchtext, setSearchText] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  // a number representing the index of the active route in the routes array
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
    <View style={css.body}>
      <View style={{backgroundColor: 'white'}}>
        <View style={css.headerTitleView}>
          <Text style={css.customHeaderText}>INDEXES</Text>
        </View>
        {/*  Top search bar */}
        <SearchBar
          value={searchtext}
          onChangeText= {
          (text)=>searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction('')}

          lightTheme
          placeholder="Search"
          inputContainerStyle={{backgroundColor: Colors.LIGHT, height: 30}}
          containerStyle={css.SearchBarContainer}
          inputStyle={{
            backgroundColor: Colors.LIGHT,
          }}
          leftIconContainerStyle={{
            color: Colors.LIGHT,
          }}
          clearIcon={{
            type: 'material-community',
            color: Colors.DARK,
            backgroundColor: Colors.LIGHT,
            name: 'close',
            size: 25,
            containerStyle: {
              backgroundColor: Colors.LIGHT,
            },
          }}
          searchIcon={{
            size: 25,
          }}
        />
      </View>
      {/* Container component responsible for rendering and managing tabs */}

      <TabView
        navigationState={{index, routes}}
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
                return <Text style={{color: Colors.LIGHT}}>{route.title}</Text>;
              } else {
                return (
                  <Text style={{color: Colors.PRIMARY}}>{route.title}</Text>
                );
              }
            }}
            indicatorStyle={css.indicatorStyle}
            style={css.tabBar}
          />
        )}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        style={{
          margin: 10,
          backgroundColor: 'white',
        }}
      />
    </View>
  );
};

export default Index;
