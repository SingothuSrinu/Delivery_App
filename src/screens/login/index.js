import React from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'

function Login({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ marginVertical: 20 }}>
        <Text style={styles.textStyles}>Mobile No.</Text>
        <TextInput placeholder='ph no.' style={styles.textInputStyles} />
      </View>
      <View style={{ marginVertical: 20 }}>
        <Text style={styles.textStyles}>Password</Text>
        <TextInput placeholder='password' style={styles.textInputStyles} />
      </View>
      <TouchableOpacity style={styles.btnstyle} onPress={()=>navigation.navigate('dashboardSrc')} >
        <Text style={styles.textStyles}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginTop: 20 }} onPress={()=>navigation.navigate('forgetpasswordSrc')} >
        <Text style={styles.textStyles}>Forget Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginTop: 20 }} onPress={()=>navigation.navigate('registrationSrc')}>
        <Text style={styles.textStyles}>Don't have an account, <Text style={{ color: 'red' }}>SignIn</Text></Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login
