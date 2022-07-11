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
} from 'react-native';
import React, {useState, useEffect} from 'react';

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
const Home = () => {
  const [activeSections, setActiveSections] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [loadingImage, setisLoadingImage] = useState(false);

  // dummy data
  const list = [
    {
      name: 'Programme and Project Management',
      avatar_url: '/home/mambhore/popp_project/assets/handshake.jpeg',
      id: 9,
      isExpanded: false,
      photos: [
        {
          url: 'img1.jpg',
        },
        {
          url: 'img1.jpg',
        },
        {
          url: 'img1.jpg',
        },
        {
          url: 'img1.jpg',
        },
      ],
    },
    {
      name: 'Financial Resources Management',
      avatar_url: '/home/mambhore/popp_project/assets/handshake.jpeg',
      id: 8,
      isExpanded: false,

      photos: [
        {
          url: 'img2.jpg',
        },
        {
          url: 'img2.jpg',
        },
        {
          url: 'img2.jpg',
        },
        {
          url: 'img2.jpg',
        },
      ],
    },
    {
      name: 'Human Resources Management',
      avatar_url: '/home/mambhore/popp_project/assets/handshake.jpeg',
      id: 7,
      isExpanded: false,

      photos: [
        {
          url: 'img3.jpg',
        },
        {
          url: 'img3.jpg',
        },
        {
          url: 'img3.jpg',
        },
        {
          url: 'img3.jpg',
        },
      ],
    },
    {
      name: 'Procurement',
      avatar_url: '/home/mambhore/popp_project/assets/handshake.jpeg',
      id: 2,
      isExpanded: false,

      photos: [
        {
          url: 'img1.jpg',
        },
        {
          url: 'img1.jpg',
        },
        {
          url: 'img1.jpg',
        },
        {
          url: 'img1.jpg',
        },
      ],
    },
    {
      name: 'Partnerships',
      avatar_url: '/home/mambhore/popp_project/assets/handshake.jpeg',
      subtitle: 'Vice Chairman',
      id: 3,
      isExpanded: false,
      photos: [
        {
          url: 'img1.jpg',
        },
        {
          url: 'img1.jpg',
        },
        {
          url: 'img1.jpg',
        },
        {
          url: 'img1.jpg',
        },
      ],
    },
    {
      name: 'Administrative Services',
      avatar_url: '/home/mambhore/popp_project/assets/handshake.jpeg',
      id: 4,
      isExpanded: false,
      photos: [
        {
          url: 'img1.jpg',
        },
        {
          url: 'img1.jpg',
        },
        {
          url: 'img1.jpg',
        },
        {
          url: 'img1.jpg',
        },
      ],
    },
    {
      name: 'Information and Communications Technology',
      avatar_url: '/home/mambhore/popp_project/assets/handshake.jpeg',
      id: 5,
      isExpanded: false,
      photos: [
        {
          url: 'img1.jpg',
        },
        {
          url: 'img1.jpg',
        },
        {
          url: 'img1.jpg',
        },
        {
          url: 'img1.jpg',
        },
      ],
    },
    {
      name: 'Security',
      avatar_url: '/home/mambhore/popp_project/assets/handshake.jpeg',
      id: 6,
      isExpanded: false,
      photos: [
        {
          url: 'img1.jpg',
        },
        {
          url: 'img1.jpg',
        },
        {
          url: 'img1.jpg',
        },
        {
          url: 'img1.jpg',
        },
      ],
    },
    {
      name: 'Security',
      id: 10,
      isExpanded: false,
      photos: [
        {
          url: 'mrunali',
        },
        {
          url: 'img1.mrunali',
        },
        {
          url: 'mrunali.jpg',
        },
        {
          url: 'mrunali.jpg',
        },
      ],
      avatar_url: '/home/mambhore/popp_project/assets/handshake.jpeg',
    },
  ];

  const [policyData, setPolicyData] = useState([]);

  // Fetching data from API
  const fetchData = async () => {
    let isMounted = true;
    const res = await axios
      .get(
        'https://popp.undp.org//SitePages/POPPJSONData.aspx?RequestType=APPDATA',
      )
      .then(res => {
        if (isMounted) {
          setPolicyData(res.data);
          setisLoading(false);
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

          <TouchableOpacity style={css.iconOnpress}>
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
              <Text style={css.accordianText}>{item.name}</Text>
              <View style={css.accordianHorizontal} />
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={css.body}>
        <View style={css.headingTextView}>
          <Text style={css.headingtext}>UNDP POLICY AREAS</Text>
        </View>

        <View>
          {/* Map array data  */}
          {policyData.map(item => (
            <TouchableOpacity
              key={item.name}
              onPress={() => setActiveSections([item.termID])}>
              {item.chapters.map((item, index) => {
                <View>
                  <TouchableOpacity key={index}>
                    <Text>{item.name}</Text>
                  </TouchableOpacity>
                </View>;
              })}
            </TouchableOpacity>
          ))}
        </View>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
