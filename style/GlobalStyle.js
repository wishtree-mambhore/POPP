import {StyleSheet} from 'react-native';
import React from 'react';
import Colors from './Colors';
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
   
  }
});

export default css;
