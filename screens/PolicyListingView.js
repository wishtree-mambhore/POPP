import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Linking,
  Share
} from 'react-native';
import React, {useState, useCallback, version} from 'react';
import {NativeBaseProvider} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import DropDownPicker from 'react-native-dropdown-picker';
import Colors from '../style/Colors';
import css from '../style/GlobalStyle';
import Accordion from 'react-native-collapsible/Accordion';

const WIDTH = Dimensions.get('window').width;

const Summary = props => {
  const SubjectData = props?.route?.params?.data;

  const [subject, setSubject] = useState([SubjectData]);
  const SubjectTitle = props?.route?.params?.title;
  const [activeSections, setActiveSections] = useState([]);
  const [pageactiveSections, setPageActiveSections] = useState([]);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  const [iconFlag, setIconFlag] = useState(false);
 
  // dummy data of proceduer 

  const procedre = [
    {
      name: 'Quality Assurancee (Programme)',
      key:1,

      steps: [
        {
          stepname: 'BPPS effectiveness Group (Programme QA Assesor)',
          brief:
            'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..',
          url: 'https://oblador.github.io/react-native-vector-icons/',
        },
        {
          stepname: 'Bx Director (Programme QA Approver)',
          brief:
            'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..',
          url: 'https://oblador.github.io/react-native-vector-icons/',
        },

        {
          stepname: 'Programme Manager (Programme QA Asistant)',
          brief:
            'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..',
          url: 'https://oblador.github.io/react-native-vector-icons/',
        },

        {
          stepname: 'Programme Manager (Programme QA Assesor)',
          brief:
            'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..',

          url: 'https://oblador.github.io/react-native-vector-icons/',
        },
      ],
    },
    {
      name: 'Quality Assurancee (Project)',
      key:2,

      steps: [
        {
          stepname: 'BPPS effectiveness Group (Programme QA Assesor)',
          brief:
            'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..',

          url: 'https://oblador.github.io/react-native-vector-icons/',
        },
        {
          stepname: 'Bx Director (Programme QA Approver)',
          brief:
            'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..',

          url: 'https://www.npmjs.com/package/react-native-custom-dropdown',
        },

        {
          stepname: 'Programme Manager (Programme QA Asistant)',
          brief:
            'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..',

          url: 'https://projects.wishtreetech.com/portal/wishtree#documents/344664000005190213',
        },

        {
          stepname: 'Programme Manager (Programme QA Assesor)',
          brief:
            'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..',

          url: 'https://www.npmjs.com/package/react-native-custom-dropdown',
        },
      ],
    },
  ];


  {  /**
  * This  onShare method used share contain through various app by click on share icon.
  * @param     nothing .
  * @return noting .
  */
}  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  // dummy data of page property 
  const pageProperty = [
    [
      {
        name: 'Page Property',
        keyword: 'N/A',
        key:1,
        focalpoint: 'Mamadou Ndaw,teuku rhamma',
        EffectiveDate: '5 jan 2018',
        PlannedReviewaDate: '1 jan 2021',
        SummaryOfChangesCommets:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum turpis diam, vitae egestas leo tempus a. Aliquam erat volutpat. Mauris efficitur leo sit amet mi convallis porttitor. Morbi scelerisque, risus et commodo viverra, purus metus hendrerit dolor, eu tincidunt velit justo at ligula. Aliquam ornare risus finibus eros scelerisque, sed lobortis leo ornare. Phasellus facilisis dui imperdiet accumsan aliquam. Sed et scelerisque ex. Donec non libero id lorem aliquet lacinia vitae vitae sapien. Quisque commodo ultrices risus, nec vulputate neque iaculis ut. Morbi nec augue at ex sollicitudin convallis. Vestibulum sodales enim ullamcorper sem euismod facilisis. Nunc mollis ultrices nulla nec tempor. Integer pretium, quam a pharetra sodales, quam diam luctus dui, vitae aliquet sem dui quis ligula. Ut libero nunc, mattis eget purus sit amet, gravida egestas nibh. Nam gravida blandit orci sed pulvinar.Curabitur molestie nulla id rhoncus molestie. Ut porttitor viverra dictum. Fusce non fringilla justo, ut ultrices ligula. Ut ac fringilla metus. Praesent ligula justo, suscipit quis pharetra sed, finibus at purus. Phasellus iaculis odio et tincidunt lacinia. Phasellus aliquet metus ac nulla pharetra, eu hendrerit diam mollis. Sed feugiat orci nisl, at cursus arcu facilisis vitae. Nulla ut sem a nisi suscipit pharetra ut in ligula. Etiam sed velit et dolor rhoncus tempor vitae vitae lacus. Phasellus gravida molestie risus, sit amet iaculis velit ullamcorper at.  Duis lacinia laoreet porta. Phasellus in nisl rutrum est cursus rhoncus. Proin sodales, nisi ac porta efficitur, lacus orci faucibus odio, et blandit turpis dolor non neque. Aliquam dignissim, turpis ac tristique finibus, dui ex consectetur ante, ut feugiat arcu mi eu orci. Nulla quis gravida est, ac semper est. Etiam ultrices tellus a sapien molestie, id auctor turpis eleifend. In eget convallis nibh. In hac habitasse platea dictumst. Etiam turpis ipsum, dignissim sodales sodales vitae, viverra a tortor. Proin eget lectus sit amet ante aliquet posuere bibendum sed lectus. Aliquam erat volutpat.',
        Version: '7',
      },
    ],
  ];


{/**
   * This is the _renderHeader method which makes use of render title of list .
   * @param sections type of array .
   * @param _ and isActive unused

   * @return title of expandable list.
 
*/}
const _renderHeader = (sections, _, isActive) => {
    // console.log("sections.termID -->", sections.termID)
    return (
      <ScrollView style={css.renderView}>
        <View style={{padding: 5}} key={sections.key}>
          <Text style={css.mainProcedureText}>{sections.name}</Text>
        </View>

        <View
          style={css.mainProcedureHorizontal}
        />
      </ScrollView>
    );
  };
 
{/**
   * This is the _renderContent method which makes use of render content of list .
   * @param sections type of array .
   * @param _ and isActive unused

   * @return content below the title of list.
 
*/}
  const _renderContent = (sections, _, isActive) => {
    return (
      <View style={[css.renderView]}>
        {sections.steps.map((item, index) => {
          return (
            <View key={index}>
              <View
                style={css.stepflex}>
                <Text style={{paddingRight: 20}}>Step {index + 1}</Text>
                <Entypo name={'user'} color={Colors.Grey} size={15} />
                <Text numberOfLines={2} style={{width: '70%'}}>
                  {item.stepname}
                </Text>
              </View>
              <View style={{padding: 10}}>
                <Text>{item.brief}</Text>
              </View>
              <TouchableOpacity
                onPress={() =>props.navigation.navigate('StepScreen',{title: `Step ${index+1}`, procTitle:item.stepname,brief:item.brief })}>
                <Text style={css.readMore}>
                  Read more
                </Text>
              </TouchableOpacity>

              <View
                style={css.stepHorizontal}
              />
            </View>
          );
        })}
      </View>
    );
  };

{/**
   * This is the _pagerenderHeader method which makes use of render title of  page .
   * @param sections type of array .
   * @param _ and isActive unused

   * @return title of expandable list.
 
*/}
  const _pagerenderHeader = (sections, _, isActive) => {
    console.log("sections.termID -->", sections.name)
    return (
      <ScrollView style={css.renderView}>
        <View style={{padding: 5}}>
          {
            sections.map((item,index)=>
            {
              return(
                <Text style={css.pageHeaderText}>{item.name}</Text>

              )
            })
          }
        </View>

        <View
          style={{
            height: 5,
            borderBottomColor: Colors.DARK,
            borderBottomWidth: 1,
          }}
        />
      </ScrollView>
    );
  };


  {/**
   * This is the _pagerenderContent method which makes use of render content of list .
   * @param sections type of array .
   * @param _ and isActive unused

   * @return title of expandable list.
 
*/}
  const _pagerenderContent = (sections, _, isActive) => {
    return (
      <View style={[css.renderView]} key={sections.key}>
        {
          sections.map((item,index)=>
          {
            return(
              <View style={{padding:10}} key={index}>

                  <Text style={css.pagepropertyText}>KEY WORDS</Text>
                  <Text style={css.pagepropertyText}>{item.keyword}</Text>
                  <Text style={css.pagepropertyText}>FOCAL POINT</Text>
                  <Text style={css.pagepropertyText}>{item.focalpoint}</Text>
                  <Text style={css.pagepropertyText}>EFFECTIVE DATE</Text>
                  <Text style={css.pagepropertyText}>{item.EffectiveDate}</Text>
                  <Text style={css.pagepropertyText}>PLANNED REVIEW DATE </Text>
                  <Text style={css.pagepropertyText}>{item.PlannedReviewaDate}</Text>
                  <Text style={css.pagepropertyText}>SUMMARY OF CHANGES/COMMENTS</Text>
                  <Text style={css.pagepropertyText}>{item.SummaryOfChangesCommets}</Text>
                  <Text style={css.pagepropertyText}>VERSIONS#</Text>
                  <Text style={css.pagepropertyText}>{item.Version}</Text>

              </View>
            
            )

          })
        }
      </View>
    );
  };

 


  //  custom header using subject Title as parameter
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitle: props => (
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          {...props}
          style={css.headerTitleText}>
          {SubjectTitle}{' '}
        </Text>
      ),

      headerStyle: {
        backgroundColor: Colors.PRIMARY,
        //Set Header color
      },
      headerRight: () => (
        <Ionicons name="share-social-sharp" color={Colors.LIGHT} size={28}  onPress={()=>{onShare()}} />
      ),
    });
  }, [props.navigation]);
  return (
    <ScrollView>
      <View style={css.body}>
        <View
          style={css.bookmarkLanguageView}>
          <View
            style={css.bookmarkIconView}>
            <Text style={{fontSize: 19, color: Colors.DARK}}>Bookmark</Text>
            {iconFlag ? (
              <TouchableOpacity
                onPress={() => {
                  setIconFlag(false);
                }}>
                <Ionicons
                  name={'md-star-sharp'}
                  color={Colors.PRIMARY}
                  size={22}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setIconFlag(true);
                }}>
                <Ionicons
                  name={'star-outline'}
                  color={Colors.PRIMARY}
                  size={22}
                />
              </TouchableOpacity>
            )}
          </View>
          <View style={{width: '50%'}}>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              style={{
                borderRadius: 0,
                borderColor: Colors.PRIMARY,
              }}
              disableBorderRadius={true}
            />
          </View>
        </View>

        <View
          style={css.relevantRegulationView}>
          <Text style={{textAlignVertical: 'bottom', color: Colors.PRIMARY}}>
            RELEVANT REGULATIONS AND RULES
          </Text>
        </View>
        <View
          style={css.policieView}>
          <Text
            style={css.policiesText}>
            Policies
          </Text>
          <Text style={css.mainPolicyText}>
            main policy
          </Text>
          <Text style={css.mainPolicyText}>
            Related policy
          </Text>
        </View>

        <View
          style={css.procedureView}>
          <Text
            style={css.procedureText}>
            PROCEDURES
          </Text>
          <Text style={{padding: 5}}>MAIN PROCEDURES</Text>
          <View>
            <Accordion
              sections={procedre}
              activeSections={activeSections}
              renderHeader={_renderHeader}
              renderContent={_renderContent}
              onChange={setActiveSections}
              duration={400}
              touchableComponent={TouchableOpacity}
            />
          </View>
        </View>
       
      </View>

      <View
        style={css.pageView}>
          
          {/* expandable list using Accordian library */}

        <Accordion
          sections={pageProperty}
          activeSections={pageactiveSections}
          renderHeader={_pagerenderHeader}
          renderContent={_pagerenderContent}
          onChange={setPageActiveSections}
          duration={400}
          touchableComponent={TouchableOpacity}
        />
      </View>
    </ScrollView>
  );
};

export default Summary;
