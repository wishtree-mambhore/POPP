import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Linking,
  Share,useColorScheme
} from 'react-native';
import React, {useState, useCallback, version} from 'react';
import {NativeBaseProvider} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { useTheme } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import Colors from '../style/Colors';
import css from '../style/GlobalStyle';
import Accordion from 'react-native-collapsible/Accordion';
import { color } from 'react-native-elements/dist/helpers';
import { texts } from '../style/Text';

const WIDTH = Dimensions.get('window').width;

const Summary = props => {
  const SubjectData = props?.route?.params?.data;

  const [subject, setSubject] = useState([SubjectData]);
  const SubjectTitle = props?.route?.params?.title;
  const [activeSections, setActiveSections] = useState([]);
  const [pageactiveSections, setPageActiveSections] = useState([]);
  const isDark=useColorScheme();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'English', value: 'English'},
    {label: 'Spanish', value: 'Spanish'},
    {label: 'French', value: 'French'},

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
      <ScrollView style={css.renderView} key={sections.key}>
        <View style={{padding: 5}} key={sections.key}>
          <Text style={[css.mainProcedureText,{color: isDark==='dark'?Colors.policyText:Colors.PRIMARY}]}>{sections.name}</Text>
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
      <View style={[css.renderView]} key={sections.key}>
        {sections.steps.map((item, index) => {
          return (
            <View>
              <View 
              
                style={css.stepflex}>
                <Text style={{paddingRight: 20, color:isDark==='dark'?Colors.policyText:Colors.Grey}}>Step {index + 1}</Text>
                <Entypo name={'user'} color={isDark==='dark'?Colors.policyText:Colors.Grey} size={15} />
                <Text numberOfLines={2} style={{width: '70%', color:isDark==='dark'?Colors.policyText:Colors.Grey}}  >
                  {item.stepname}
                </Text>
              </View>
              <View style={{padding: 10}}>
                <Text style={{color:isDark==='dark'?Colors.policyText:Colors.Grey}}>{item.brief}</Text>
              </View>
              <TouchableOpacity
                onPress={() =>props.navigation.navigate('StepScreen',{title: `Step ${index+1}`, procTitle:item.stepname,brief:item.brief })}>
                <Text style={[css.readMore, {color:isDark==='dark'?Colors.btnColor:Colors.PRIMARY}]}>
                  {texts.ReadMore}
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
    return (
      <View style={[css.renderView,{backgroundColor:isDark==='dark'?Colors.darkGray:Colors.LightGray}]}>
        <View style={{padding: 5}}>
          {
            sections.map((item,index)=>
            {
              return(
                <Text key={index} style={[css.pageHeaderText, {color:isDark==='dark'?Colors.LightGray:Colors.PRIMARY}]}>{item.name}</Text>

              )
            })
          }
        </View>

        <View
          style={{
            height: 5,
            borderBottomColor:isDark==='dark'? Colors.LIGHT:Colors.DARK,
            borderBottomWidth: 1,
          }}
        />
      </View>
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
              <View style={{ backgroundColor:isDark==='dark'?Colors.darkGray:Colors.LightGray }} key={index}>

                  <Text style={[css.pagepropertyText,{color:isDark==='dark'?Colors.pagepropertyTextColor:Colors.DARK}]}>KEY WORDS</Text>
                  <Text style={[css.pagepropertyInnerText,{color:isDark==='dark'?Colors.pagepropertyInnerTextColor:Colors.Grey}]}>{item.keyword}</Text>
                  <Text style={[css.pagepropertyText,{color:isDark==='dark'?Colors.pagepropertyTextColor:Colors.DARK}]}>FOCAL POINT</Text>
                  <Text style={[css.pagepropertyInnerText,{color:isDark==='dark'?Colors.pagepropertyInnerTextColor:Colors.Grey}]}>{item.focalpoint}</Text>
                  <Text style={[css.pagepropertyText,{color:isDark==='dark'?Colors.pagepropertyTextColor:Colors.DARK}]}>EFFECTIVE DATE</Text>
                  <Text style={[css.pagepropertyInnerText,{color:isDark==='dark'?Colors.pagepropertyInnerTextColor:Colors.Grey}]}>{item.EffectiveDate}</Text>
                  <Text style={[css.pagepropertyText,{color:isDark==='dark'?Colors.pagepropertyTextColor:Colors.DARK}]}>PLANNED REVIEW DATE </Text>
                  <Text style={[css.pagepropertyInnerText,{color:isDark==='dark'?Colors.pagepropertyInnerTextColor:Colors.Grey}]}>{item.PlannedReviewaDate}</Text>
                  <Text style={[css.pagepropertyText,{color:isDark==='dark'?Colors.pagepropertyTextColor:Colors.DARK}]}>SUMMARY OF CHANGES/COMMENTS</Text>
                  <Text style={[css.pagepropertyInnerText,{color:isDark==='dark'?Colors.pagepropertyInnerTextColor:Colors.Grey}]}>{item.SummaryOfChangesCommets}</Text>
                  <Text style={[css.pagepropertyText,{color:isDark==='dark'?Colors.pagepropertyTextColor:Colors.DARK}]}>VERSIONS#</Text>
                  <Text style={[css.pagepropertyInnerText,{color:isDark==='dark'?Colors.pagepropertyInnerTextColor:Colors.Grey}]}>{item.Version}</Text>

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




<ScrollView  style={{backgroundColor:isDark==='dark'?Colors.DARK:LIGHT}} >
  <View style={[css.body,]} >
        <View
          style={[css.bookmarkLanguageView,]}>
          <View
            style={[css.bookmarkIconView,{backgroundColor:isDark==='dark'?Colors.darkGray:null}]}>
            <Text style={{fontSize: 19, color: isDark==='dark'? Colors.policyText:Colors.DARK}}>Bookmark</Text>
            {iconFlag ? (
              <TouchableOpacity
                onPress={() => {
                  setIconFlag(false);
                }}>
                <Ionicons
                  name={'md-star-sharp'}
                  color={ isDark==='dark'?Colors.LIGHT: Colors.PRIMARY}
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
                  color={isDark==='dark'?Colors.LIGHT: Colors.PRIMARY}
                  size={22}
                />
              </TouchableOpacity>
            )}
          </View>
            <DropDownPicker
            listMode='SCROLLVIEW'
            containerStyle={{
              width:'50%'
            }}
           
            
            labelStyle={{
              color:isDark==='dark'?Colors.policyText:Colors.LIGHT,
              fontSize:18
            }}

             
             dropDownDirection={
              'BOTTOM'
             }
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              theme={isDark==='dark'?'DARK':'LIGHT'}
             
              style={{
                borderRadius: 0,
                borderColor: Colors.PRIMARY,
              }}
              disableBorderRadius={true}
            />
        </View>

        <View
          style={[css.relevantRegulationView,{backgroundColor:isDark==='dark'? Colors.darkGray:Colors.LightBlue}]}>
          <Text style={{textAlignVertical: 'bottom', color: isDark==='dark'?Colors.policyText:Colors.PRIMARY}}>
            RELEVANT REGULATIONS AND RULES
          </Text>
        </View>
        <View
          style={[css.policieView,{backgroundColor:isDark==='dark'? Colors.darkGray:Colors.LightGray}]}>
          <Text
            style={[css.policiesText,{color: isDark==='dark'?Colors.policyText:Colors.PRIMARY}]}>
            Policies
          </Text>
          <Text style={[css.mainPolicyText, {color: isDark==='dark'?Colors.policyText:Colors.PRIMARY}]}>
            main policy
          </Text>
          <Text style={[css.mainPolicyText,{color: isDark==='dark'?Colors.policyText:Colors.PRIMARY}]}>
            Related policy
          </Text>
        </View>

        <View
          style={[css.procedureView,{backgroundColor:isDark==='dark'? Colors.darkGray:Colors.LightBlue}]}>
          <Text
            style={[css.procedureText, {color: isDark==='dark'?Colors.policyText:Colors.PRIMARY} ]}>
            PROCEDURES
          </Text>
          <Text style={{padding: 5,color: isDark==='dark'?Colors.policyText:Colors.DARK}}>MAIN PROCEDURES</Text>
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
      key={item=>item.id}
        style={css.pageView}>
          
          {/* expandable list using Accordian library */}

        <Accordion
          sections={pageProperty}
          key={item=>pageProperty.key}
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
