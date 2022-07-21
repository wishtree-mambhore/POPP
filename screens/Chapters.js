import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import { texts } from '../style/Text';
import React, {useState, useEffect} from 'react';
import Colors from '../style/Colors';
import css from '../style/GlobalStyle';
import Accordion from 'react-native-collapsible/Accordion';


const Chapters = props => {
  const SubjectGroupData = props?.route?.params?.data;
  const chapterTitle = props?.route?.params?.title;
  const subjects = props?.route?.params?.subjects; 
  const [subData,setSubData] = React.useState([]);
  const [subGroup,setsubGroup] = React.useState([]);
  const [activeSections, setActiveSections] = useState([]);


  // set subject and chapter data during mounting
  useEffect(() => {
    setSubData(subjects);
    setsubGroup(chapterArray)
  });
  const chapterArray = SubjectGroupData; 

  // custom header by providing chapter title props
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitle: props => (
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          {...props}
          style={css.headerTitleText}>
          {chapterTitle}{' '}
        </Text>
      ),
      headerStyle: {
        backgroundColor: Colors.PRIMARY, //Set Header color
      },
    });
  }, [props.navigation]);

{/**
   * This is the _renderHeader method which makes use of render title of list .
   * @param sections type of array .
   * @param _ and isActive unused

   * @return title of expandable list.
 
*/}
  const _renderHeader = (sections, _, isActive) => {
    // console.log('sections.termID -->', sections);
    return (
      <ScrollView style={css.renderView}>
      <View key={sections.termID.toString()}>
        

        <Text style={css.subjectsText}>{sections.name}</Text>

       
      </View>

      <View style={css.horizontalLine} />
    </ScrollView>
    );
  };


{/**
   * This is the _renderContent method which makes use of render title of list .
   * @param sections type of array .
   * @param _ and isActive unused

   * @return title of expandable list.
 
*/}
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
      {/* expandable list using Accordian library */}
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
       <View style={{backgroundColor:'white'}}>
      {/* display of subject from chapter's data  */}
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

     </View>:<View styles={{flex:1,backgroundColor:Colors.LIGHT, }}><Text style={{textAlign:'center',fontSize:20}}>{texts.nodata}</Text></View> }

    </View>
  );
};

export default Chapters;
