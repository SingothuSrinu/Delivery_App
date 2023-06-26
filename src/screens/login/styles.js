import React from 'react';
import {View , StyleSheet,Dimensions} from 'react-native';

width = Dimensions.get( 'screen').width
height = Dimensions.get('screen').height

export default styles= StyleSheet.create({
textInputStyles:{
width: width*0.8,borderRadius:10,height:40,borderWidth:1,color:'black'
},
textStyles:{
    fontSize:16,color:'black'
},
btnstyle:{width:width*0.8,backgroundColor:'skyblue',height:40,borderRadius:20,alignItems:'center',justifyContent: 'center' }
})