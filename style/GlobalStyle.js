import {StyleSheet,Dimensions} from 'react-native';
import React from 'react';
import Colors from './Colors';
const WIDTH = Dimensions.get('window').width;

const css = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor:Colors.LIGHT

    // alignItems:'center',
    // justifyContent:'center',
  },
  horizontalLine: {
    height: 5,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  headingtext: {
    fontFamily:'MYRIADPROREGULAR',
    fontSize: 23,
    color: Colors.LIGHT,
    padding: 10,
    fontWeight: '400',
  },
  headingTextView: {
    backgroundColor: Colors.PRIMARY,
    width: '100%',
    alignItems: 'center',
    // padding: 10,
  },
  flexItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width:'100%',
    padding: 10,
  },
  image: {
    width: 40,
    height: 40,
  },
  iconimage: {
    width: 30,
    height: 30,
  },
  accordianContainer: {
    paddingHorizontal: 15,
     paddingVertical: 5
  },
  accordianText: {
    padding: 7,
     fontSize: 14,
     color: 'grey',
     fontWeight: '400',
     textTransform:'uppercase',
  },

  accordianHorizontal: {
    height: 4,
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
  },
  subjectsText:
  {
    fontSize: 15,
    width: '100%',
    color: '#01426c',
    fontWeight: '400',
    textTransform: 'uppercase',
    paddingBottom:10,
    paddingLeft:5,
    paddingTop:10,
  },
  subjectsTextView:
  {
margin:10,
  },

  itemText: {
    fontSize: 15,
    width: '70%',
    paddingLeft: 7,
    color: '#01426c',
    fontWeight: '400',
    textTransform: 'uppercase',
  },
  textOnpress: {
    width: '50%',
  },
  iconOnpress: {
    padding: 5,
  },
  renderView: {
    // marginBottom:10,
    paddingHorizontal: 7,
  },
  bottomText:
  {
    textAlign:'center',
    numberOfLines:1,
   
  },
headerTitleText:
{
  color: 'white',
  fontFamily: 'MARIADPROREGULAR',
  fontSize: 18,
  width: WIDTH - 120,
}
,
dataText:
{
  textAlign:'center',fontSize:2
},
mainProcedureHeaderText:
{
  color: 'grey', fontSize: 15
},
mainProcedureHorizontal:

{
  height: 5,
  borderBottomColor: '#CDD8DB',
  borderBottomWidth: 1,
}
,
bookmarkLanguageView:
{
  flexDirection: 'row',
  justifyContent: 'space-around',
  margin: 12,
},
policieView:

{
  backgroundColor: '#F4F4F4',
  height: 100,
  margin: 10,
  borderRadius: 10,
  paddingLeft: 10,
  paddingRight: 10,
},
mainPolicyText:
{
  paddingLeft: 10, textTransform: 'uppercase'

},
policiesText:
{
  fontSize: 15,
  borderBottomWidth: 1,
  paddingLeft: 3,
  textTransform: 'uppercase',
  color: Colors.PRIMARY,
  paddingTop: 10,
  borderBottomColor: '#CDD8DB',
},

procedureView:
{
  borderRadius: 10,
  margin: 7,
  backgroundColor: '#EBFAFF',

  alignItems: 'flex-start',
  borderBottomColor: '#bbbbbb',
  paddingLeft: 10,
  paddingTop: 15,
  paddingRight: 15,
}
,
pageView:
{
  backgroundColor: 'white',
  margin: 7,
  borderRadius: 10,
  height:'100%'
},
procedureText:
{
  textAlignVertical: 'bottom',
  color: Colors.PRIMARY,
  width: '100%',
  borderBottomWidth: 1,
  paddingBottom: 5,
  borderBottomColor: '#bbbbbb',
},
relevantRegulationView:
{
  borderBottomWidth: 2,
  borderRadius: 10,
  margin: 7,
  backgroundColor: '#EBFAFF',
  height: 40,
  alignItems: 'flex-start',
  borderBottomColor: '#EDEFF1',
  paddingLeft: 10,
  paddingTop: 15,
},
bookmarkIconView:
{
  borderWidth: 1,
  width: '50%',
  borderColor: Colors.PRIMARY,
  marginRight: 20,
  flexDirection: 'row',
  justifyContent: 'space-around',
  padding: 10,
},
pagepropertyText:
{
paddingBottom:5
},

stepHorizontal:
{
  height: 5,
  borderBottomColor: '#CDD8DB',
  borderBottomWidth: 1,
  marginLeft: 15,
},


readMore:
{
color:Colors.PRIMARY,
justifyContent:'flex-end',
alignSelf:'flex-end',
},
stepflex:
{  flexDirection: 'row',
justifyContent: 'space-between',
paddingTop: 5,

},





})

export default css;
