import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  useColorScheme
} from 'react-native';
import React, {useState, useEffect} from 'react';
import css from '../style/GlobalStyle';
import Colors from '../style/Colors';
import Accordion from 'react-native-collapsible/Accordion';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from 'axios';
import {LogBox} from 'react-native';
import FastImage from 'react-native-fast-image';
import {urls} from '../style/URL';
import { useTheme } from '@react-navigation/native'
import { StatusBar, theme } from 'native-base';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();
const Home = props => {
  const isDark=useColorScheme()
  const [activeSections, setActiveSections] = useState([]);
 const theme =useTheme()
  const [policyData, setPolicyData] = useState([]);
  {
    /*  
     * This is the fetchDataS method which makes use of fetching data froms erver.
     * @param apiUrl used from urls global file.
     * @return ismounted .
     */
  }

  const fetchData = async () => {
    let isMounted = true;
    const res = await axios.get(urls.apiUrl).then(res => {
      if (isMounted) {
        setPolicyData(res.data);
      }
    });
    return () => {
      isMounted = false;
    };
  };

{  /**
   * This is the useEffect is hook which makes use to render fetchData method when app start.
   * @param     nothing .
   * @return noting .
   */
}

  useEffect(() => {
    fetchData();
  }, []);



 {/**
   * This is the _renderHeader method which makes use of render title of list .
   * @param sections type of array .
   * @param _ and isActive unused

   * @return title of expandable list.
 
*/} 
  const _renderHeader = (sections, _, isActive) => {
    
    return (
      <ScrollView style={{paddingHorizontal:7, backgroundColor: isDark==='dark'? Colors.DARK: Colors.LIGHT}}>
        <StatusBar barStyle={isDark==='dark'? 'light-content':'dark-content'} backgroundColor={isDark==='dark' ? Colors.DARK:Colors.Grey}/>
        <View style={css.flexItem} key={sections.termID.toString()}>
          <View>
            <Image
            style={css.image}
            source={{
              cache: FastImage.cacheControl.cacheOnly,
              priority: FastImage.priority.high,

              uri: urls.imageicon + sections.termID + '.png',
            }}
       
          />
            
           
          </View>

          <Text style={[css.itemText, {color: isDark==='dark'?Colors.Grey:Colors.PRIMARY}]}>{sections.name}</Text>
          {/* navigate to webview page */}
          <TouchableOpacity
            style={css.iconOnpress}
            onPress={() => props.navigation.navigate('SummaryChapter')}>
            <Image
              style={css.iconimage}
              // info tag image from  URL page
              source={urls.infotag}
            />
          </TouchableOpacity>
        </View>

        <View style={css.horizontalLine} />
      </ScrollView>
    );
  };

 { /**
  This is the _renderHeader method which makes use of render title of list .

 * @param sections — type of array .

 * @param _ — and isActive unused

  * @return — title of expandable list.
 
*/}

  const _renderContent = (sections, _, isActive) => {
    return (
      <View>
        {sections.chapters.map((item, index) => {
          return (
            <View style={css.accordianContainer} key={index}>
              <TouchableOpacity
              key={index}
                onPress={() =>
                  props.navigation.navigate('Chapters', {
                    data: item.subjectGroups,
                    title: item.name,
                    subjects: item.subjects,
                  })
                }>
                <Text style={[css.accordianText,{color:isDark==='dark'?Colors.LightGray:Colors.Grey}]} numberOfLines={1}>
                  {item.name}
                </Text>
              </TouchableOpacity>
              <View style={css.accordianHorizontal} />
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {policyData.length == 0 ? (
        <ActivityIndicator
          color={isDark==='dark'?Colors.LIGHT:Colors.PRIMARY}
          size={40}
          style={{marginTop: 100}}
        />
      ) : (
        <ScrollView style={css.body}>
          {/* using Accordian to show expandable list */}
          <Accordion
            sections={policyData}
            activeSections={activeSections}
            renderHeader={_renderHeader}
            renderContent={_renderContent}
            onChange={setActiveSections}
            duration={400}
            containerStyle={
            {
              backgroundColor: isDark==='dark'? Colors.Grey : null
            }
            }
            sectionContainerStyle={{
              backgroundColor:isDark==='dark'?'#6B778D':Colors.LightGray
            }}
            
            touchableComponent={TouchableOpacity}
          />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Home;
