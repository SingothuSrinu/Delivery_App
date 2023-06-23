import React from 'react'
import { Text, View } from 'react-native'
import Colors from './src/asserts/colors'

const App = () => {
  return (
   <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
    <Text style={{color:Colors.red}}>hello...!</Text>
   </View>
  )
}

export default App
