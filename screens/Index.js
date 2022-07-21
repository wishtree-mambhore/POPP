import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  useWindowDimensions,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {texts} from '../style/Text';
import Colors from '../style/Colors';
import css from '../style/GlobalStyle';
import {SearchBar} from 'react-native-elements';  
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';   
import CustomFlatList from './FlatList';

{/*
This is dummy data to show list of item unde allpolicy tab
*/}
const allpolicyData = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Poilcy  1',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Policy 2',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third  policy 3',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third  policy 4',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third  policy 5',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third  policy 6',
  },
];


{/*
This is dummy data to show list of item unde BookMarkPolicies tab
*/}
const bookmarkdata = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First bookmark Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second bookmark Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third bookmark Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'fourth bookmark Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Fifth bookmark Item',
  },
];

 {/**
   *renderScene method which returns a react element to render as the page for the tab

   *@param   route as parameter      

   *@return  react element to render as the page for the tab .
 
*/}
const renderScene = ({route}) => {
  console.log(route);
  switch (route.key) {
    case 'first':
      return <CustomFlatList data={allpolicyData} />;
    case 'second':
      return <CustomFlatList data={bookmarkdata} />;
    default:
      return null;
  }
};

const Index = props => {


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
 
// a number representing the index of the active route in the routes array
  const [index, setIndex] = React.useState(0);
  // an array containing a list of route objects used for rendering the tabs
  const [routes] = React.useState([
    {key: 'first', title: 'All Policies'},
    {key: 'second', title: 'Bookmarked Policies'},
  ]);

  return (
    <View style={css.body}>
      <View style={{backgroundColor: 'white'}}>
        <View style={css.headerTitleView}>
          <Text
            style={css.customHeaderText}>
            {texts.IndexScreen}
          </Text>
        </View>
        {/*  Top search bar */}
        <SearchBar
          value={searchtext}
          onChangeText={value => {
            setSearchText(value);
          }}
          lightTheme
          placeholder="Search"
          inputContainerStyle={{backgroundColor: '#FFFFFF', height: 30}}
          containerStyle={css.SearchBarContainer}
          inputStyle={{
            backgroundColor: Colors.LIGHT
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
        swipeEnabled={false}
        renderScene={renderScene}
        renderTabBar={props => (
          <TabBar
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
