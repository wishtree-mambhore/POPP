import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  LayoutAnimation,
  StyleSheet,
  ActivityIndicator,
  Linking,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import css from '../style/GlobalStyle';
import Colors from '../style/Colors';
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from 'axios';
import {LogBox} from 'react-native';
import FastImage from 'react-native-fast-image';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();

const Home = props => {
  const [activeSections, setActiveSections] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  // const [loadingImage, setisLoadingImage] = useState(false);

  // dummy data

  const [policyData, setPolicyData] = useState([]);
  const [chapterArray, setChapterArray] = useState([]);

  // Fetching data from API
  const fetchData = async () => {
    let isMounted = true;
    setisLoading(true);
    const res = await axios
      .get(
        'https://popp.undp.org//SitePages/POPPJSONData.aspx?RequestType=APPDATA',
      )
      .then(res => {
        if (isMounted) {
          setPolicyData(res.data);
          setisLoading(false);
          console.log('policy data ', policyData);
          if (res.data) {
          }
        }
      });
    return () => {
      isMounted = false;
    };
  };

  // calling function when app start
  useEffect(() => {
    fetchData();
  }, []);

  // const handlePress = useCallback(async (url) => {
  //   console.log('url --> ',url)
  //   // Checking if the link is supported for links with custom URL scheme.
  //   const supported = await Linking.canOpenURL(url);

  //   if (supported) {
  //     // Opening the link with some app, if the URL scheme is "http" the web link should be opened
  //     // by some browser in the mobile
  //     await Linking.openURL(url);
  //   } else {
  //     alert('hello url not workin ', url)
  //   }
  // }, [url]);
  // this function render title of the data
  const _renderHeader = (sections, _, isActive) => {
    // console.log("sections.termID -->", sections.termID)
    return (
      <ScrollView style={css.renderView}>
        <View style={css.flexItem} key={sections.termID.toString()}>
          <View>
            <FastImage
              style={css.image}
              source={{
                cache: FastImage.cacheControl.cacheOnly,
                priority: FastImage.priority.high,

                uri:
                  'https://popp.undp.org/Style%20Library/POPP/images/icons/' +
                  sections.termID +
                  '.png',
              }}
              onLoad={e => {
                console.log(
                  'loadin loaded ',
                  e.nativeEvent.width,
                  e.nativeEvent.height,
                );
              }}
              onLoadEnd={e => console.log('Loading Ended')}
              onLoadStart={e => console.log('Loading Start')}
              onProgress={e =>
                console.log(
                  'Loading Progress ' +
                    e.nativeEvent.loaded / e.nativeEvent.total,
                )
              }
            />
          </View>

          <Text style={css.itemText}>{sections.name}</Text>

          <TouchableOpacity
            style={css.iconOnpress}
            onPress={() => props.navigation.navigate('SummaryChapter')}>
            <Image
              style={css.iconimage}
              // info tag image from assets
              source={require('/home/mambhore/popp_project/assets/undpITag.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={css.horizontalLine} />
      </ScrollView>
    );
  };

  // this function render content of data under title
  const _renderContent = (sections, _, isActive) => {
    return (
      <View>
        {sections.chapters.map((item, index) => {
          return (
            <View style={css.accordianContainer} key={index}>
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('Chapters', {
                    data: item.subjectGroups,
                    title: item.name,
                    subjects: item.subjects,
                    

                  })
                }>
                <Text style={css.accordianText} numberOfLines={1}>
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
      {
        (policyData.length==0)?<ActivityIndicator  color={Colors.PRIMARY} size={40}  style={{marginTop:100}}/>:   <ScrollView style={css.body}>
        {/* using Accordian to show expandable list */}
        <Accordion
          sections={policyData}
          activeSections={activeSections}
          renderHeader={_renderHeader}
          renderContent={_renderContent}
          onChange={setActiveSections}
          duration={400}
          touchableComponent={TouchableOpacity}
        />
        <View style={[css.flexItem, {paddingLeft: 61}]}>
          <Text style={[css.itemText, css.bottomText]}>
            programme and project management visual guides
          </Text>

          <TouchableOpacity
            style={css.iconOnpress}
            onPress={() => props.navigation.navigate('SummaryChapter')}>
            <Image
              style={css.iconimage}
              // info tag image from assets
              source={require('/home/mambhore/popp_project/assets/undpITag.png')}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      }
   
    </SafeAreaView>
  );
};

export default Home;
