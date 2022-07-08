import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  LayoutAnimation,
  StyleSheet,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import css from '../style/GlobalStyle';
import Colors from '../style/Colors';
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from 'axios';
const Home = () => {
  const [activeSections, setActiveSections] = useState([]);
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

   const [policyData,setPolicyData]=useState([])
  //  const fetchData=()=>
  //  {
  //   axios.get('https://popp.undp.org//SitePages/POPPJSONData.aspx?RequestType=APPDATA').then((res)=>
  //   {
  //     var temp=res.data;
  //     setPolicyData(temp)
  //     console.log('policy --> ', policyData);
  //   })
  //  }

  //  useEffect(() => {
  //    fetchData();
   
  //  }, [])
   

  // this function render title of the data
  const _renderHeader = (sections, _, isActive) => {
    return (
      <ScrollView style={css.renderView}>
        <View style={css.flexItem}>
          <Image
            style={css.image}
            source={require('/home/mambhore/popp_project/assets/handshake.jpeg')}
          />
          <Text style={css.itemText}>{sections.name}</Text>

          <TouchableOpacity style={css.iconOnpress}>
            <Image
              style={css.image}
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
        {sections.photos.map(item => {
          return (
            <View style={css.accordianContainer}>
              <Text style={css.accordianText}>{item.url}</Text>
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
          {list.map(item => (
            <TouchableOpacity
              key={item.id}
              onPress={() => setActiveSections([item.id])}>
              {item.photos.map(item => {
                <View>
                  <TouchableOpacity key={item}>
                    <Text>{item.url}</Text>
                  </TouchableOpacity>
                </View>;
              })}
            </TouchableOpacity>
          ))}
        </View>

        <Accordion
          key={list}
          sections={list}
          activeSections={activeSections}
          //  renderSectionTitle={_renderSectionTitle}
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
