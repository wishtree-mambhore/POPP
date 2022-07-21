import {StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import Colors from './Colors';
import {color} from 'react-native-elements/dist/helpers';
import { theme } from 'native-base';
const WIDTH = Dimensions.get('window').width;

const css = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.LIGHT,

    // alignItems:'center',
    // justifyContent:'center',
  },
  darkBody: {
    backgroundColor: '#A5C9CA',
    color: Colors.DARK,
  },
  headerTitleView: {backgroundColor: Colors.PRIMARY, height: 50,width:'100%'},
  horizontalLine: {
    height: 5,
    borderBottomColor: Colors.DARK,
    borderBottomWidth: 1,
  },

  SearchBarContainer: {
    backgroundColor: Colors.LIGHT,
    borderColor: Colors.PRIMARY,
    borderWidth: 2,
    borderTopColor: Colors.PRIMARY,
    borderBottomColor: Colors.PRIMARY,

    margin: 10,
    padding: 5,
    borderRadius: 5,
    shadowOpacity: 3,
  },
  customHeaderText: {
    color: Colors.LIGHT,
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 10,
  },
  headingtext: {
    fontFamily: 'MYRIADPROREGULAR',
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

  tabBar: {
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    backgroundColor: 'white',
    height: 45,
  },
  indicatorStyle: {
    backgroundColor: Colors.PRIMARY,
    height: '100%',
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
    paddingVertical: 5,
  },
  accordianText: {
    padding: 7,
    fontSize: 14,
    color: 'grey',
    fontWeight: '400',
    textTransform: 'uppercase',
  },

  accordianHorizontal: {
    height: 4,
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
  },
  subjectsText: {
    fontSize: 15,
    width: '100%',
    color: '#01426c',
    fontWeight: '400',
    textTransform: 'uppercase',
    paddingBottom: 10,
    paddingLeft: 5,
    paddingTop: 10,
  },
  subjectsTextView: {
    margin: 10,
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
  bottomText: {
    textAlign: 'center',
    numberOfLines: 1,
  },
  HeaderTextTitle: {
    color: Colors.LIGHT,
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 10,
  },
  headerTitleText: {
    color: 'white',
    fontFamily: 'MARIADPROREGULAR',
    fontSize: 18,
    width: WIDTH - 120,
  },
  dataText: {
    textAlign: 'center',
    fontSize: 2,
  },
  mainProcedureHeaderText: {
    color: 'black',
    fontSize: 15,
  },
  mainProcedureHorizontal: {
    height: 5,
    borderBottomColor: '#CDD8DB',
    borderBottomWidth: 1,
  },
  bookmarkLanguageView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 12,
  },
  policieView: {
    backgroundColor: '#F4F4F4',
    height: 100,
    margin: 10,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  mainPolicyText: {
    paddingLeft: 10,
    textTransform: 'uppercase',
    color: Colors.Grey,
  },
  policiesText: {
    fontSize: 15,
    borderBottomWidth: 1,
    paddingLeft: 3,
    textTransform: 'uppercase',
    color: Colors.PRIMARY,
    paddingTop: 10,
    borderBottomColor: '#CDD8DB',
  },

  procedureView: {
    borderRadius: 10,
    margin: 7,
    backgroundColor: '#EBFAFF',

    alignItems: 'flex-start',
    borderBottomColor: '#bbbbbb',
    paddingLeft: 10,
    paddingTop: 15,
    paddingRight: 15,
  },
  pageHeaderText: {
    fontSize: 15,
    paddingLeft: 3,
    textTransform: 'uppercase',
    color: Colors.PRIMARY,
    paddingTop: 10,
  },

  container_dark: {
    background: 'black',
    foreground: 'black',
  },
  container_light: {
    background: '#fff',
    foreground: '#000',
  },
  pageView: {
    backgroundColor: '#e9ecef',
    margin: 7,
    borderRadius: 10,
    height: '100%',
  },
  procedureText: {
    textAlignVertical: 'bottom',
    color: Colors.PRIMARY,
    width: '100%',
    borderBottomWidth: 1,
    paddingBottom: 5,
    borderBottomColor: '#bbbbbb',
  },
  relevantRegulationView: {
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
  bookmarkIconView: {
    borderWidth: 1,
    width: '50%',
    borderColor: Colors.PRIMARY,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  loadmoreView:
  {

    padding: 10,
    
    justifyContent: 'center',
    
    alignItems: 'center',
    
    flexDirection: 'row',
    width:'100%'
    
    },
  loadmoreToucview:
  {    width:'100%',

    padding: 10,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadmorebtn:
  {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
  whtsnewTitle: {
    // color: Colors.PRIMARY,
    fontSize: 15,
    fontFamily: 'MARIADPROREGULAR',
    textTransform: 'uppercase',
    paddingBottom: 8,
  },
  whtsnewDesc: {
    fontSize: 11,
    fontFamily: 'MARIADPROREGULAR',
  
  },
  whtsnewHorizontal:
  {
    height: 5,
    borderBottomColor: '#adb5bd',
    borderBottomWidth: 1,
  },
  whtsnewEffectiveDate: {
    fontSize: 13,
    fontFamily: 'MARIADPROREGULAR',
    textAlign: 'right',
    textTransform: 'uppercase',
  },
  newPolicyDetailDesc:
  
    {fontSize:13 ,padding:10},
    newPolicyDetailHorizontal:
    {height:5,borderBottomWidth:1,marginBottom:15,marginHorizontal:15, color:Colors.Grey},
    newPolicyDetailDocument:
    
      {paddingLeft:10,paddingBottom:5},
      newPolicyDetailDocumentLink:
      {fontSize:13 ,color:Colors.PRIMARY,paddingLeft:10,textTransform:'uppercase'},
    
  
  WhatsnewView: {
    margin: 10,
  },

  pagepropertyText: {
    paddingBottom: 5,
    color: Colors.DARK,
  },
  pagepropertyInnerText: {
    paddingBottom: 5,
    color: Colors.Grey,
  },
  stepHorizontal: {
    height: 5,
    borderBottomColor: '#CDD8DB',
    borderBottomWidth: 1,
    marginLeft: 15,
  },

  readMore: {
    color: Colors.PRIMARY,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  stepflex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
  },
});

export default css;
