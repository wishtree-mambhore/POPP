import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Colors from '../style/Colors';
import css from '../style/GlobalStyle';
import Accordion from 'react-native-collapsible/Accordion';
import {SafeAreaView} from 'react-native-safe-area-context';

const WIDTH = Dimensions.get('window').width;

const Chapters = props => {
  const ChaptersData = props?.route?.params?.data;
  const chapterTitle = props?.route?.params?.title;
  const subjects = props?.route?.params?.subjects;
  const [subData,setSubData] = React.useState([]);
  const [subGroup,setsubGroup] = React.useState([]);

  const [activeSections, setActiveSections] = useState([]);

  console.log('subjects data ', subjects);
  useEffect(() => {
    setSubData(subjects);
    setsubGroup(chapterArray)
  });
  const chapterArray = ChaptersData;
  // console.log('Chpater data ', chapterArray);
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
            width: WIDTH - 120,
          }}>
          {chapterTitle}{' '}
        </Text>
      ),
      headerStyle: {
        backgroundColor: Colors.PRIMARY, //Set Header color
      },
    });
  }, [props.navigation]);
  const _renderHeader = (sections, _, isActive) => {
    console.log('sections.termID -->', sections);
    return (
      <ScrollView style={css.renderView}>
      <View key={sections.termID.toString()}>
        

        <Text style={css.subjectsText}>{sections.name}</Text>

       
      </View>

      <View style={css.horizontalLine} />
    </ScrollView>
    );
  };

  const _renderContent = (sections, _, isActive) => {
    return (
      <View>
      {sections.subjects.map((item, index) => {
        return (
          <View style={css.accordianContainer} key={index}>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('Sum',{title:item.name,surl:item.pageLinkUrl})}}>
              <Text style={css.accordianText} numberOfLines={1}>
                {item.name}
                {item.pageLinkUrl}
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
    <View style={css.body}>
      <Accordion
         sections={chapterArray}
         activeSections={activeSections}
         renderHeader={_renderHeader}
         renderContent={_renderContent}
         onChange={setActiveSections}
         duration={400}
         touchableComponent={TouchableOpacity}
       />
      {(subData.length  || subGroup.length)? 
       <View>
      
       {
         subjects.map((item,index)=>
         {
           return(<View 
           style={css.subjectsTextView}>
           <TouchableOpacity onPress={()=>{props.navigation.navigate('Sum',{title:item.name})}}>
           <Text style={css.subjectsText}>{item.name}</Text>

           </TouchableOpacity>
           <View style={css.accordianHorizontal} />

           </View>) 
         })
       }

     </View>:<View styles={{flex:1,backgroundColor:'red'}}><Text>NO DATA AVAILABLE</Text></View> }

    </View>
  );
};

export default Chapters;
