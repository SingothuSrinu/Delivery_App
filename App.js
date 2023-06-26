import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import Colors from './src/asserts/colors'
import MainNavigation from './src/MainNavigator'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainNavigation />
    </SafeAreaView>
  )
}

export default App
