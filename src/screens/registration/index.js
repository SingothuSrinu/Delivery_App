import React from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'

function Registration() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.textStyles}>Registration Screen</Text>
      <View style={{ marginVertical: 20 }}>
        <Text style={styles.textStyles}>Mobile No.</Text>
        <TextInput placeholder='ph no.' style={styles.textInputStyles} />
      </View>
      <View style={{ marginVertical: 20 }}>
        <Text style={styles.textStyles}>Password</Text>
        <TextInput placeholder='password' style={styles.textInputStyles} />
      </View>
      {/* <TouchableOpacity style={{ marginTop: 20 }} >
        <Text style={styles.textStyles}>Forget Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginTop: 20 }}>
        <Text style={styles.textStyles}>Don't have an account, <Text style={{ color: 'red' }}>SignIn</Text></Text>
      </TouchableOpacity> */}
    </View>
  )
}

export default Registration
