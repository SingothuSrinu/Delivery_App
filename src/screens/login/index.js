import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native'
import styles from './styles'
import { Images } from '../../asserts/images'
import Animated, { AnimateStyle, Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';


function Login({ navigation }) {
  const [screenChanger, setScreenChanger] = useState('false')
  const randomWidth = useSharedValue('90%');
  const randomheght = useSharedValue('90%');
  const blackSlideHeight = useSharedValue('10%')
  const blackSlideWidth = useSharedValue('10%')

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(randomWidth.value),
      height: withTiming(randomheght.value),
    };
  });
  const blackstyle = useAnimatedStyle(() => {
    return {
      width: withTiming(blackSlideWidth.value),
      height: withTiming(blackSlideHeight.value),
    };
  });
  const changes = () => {
    // randomWidth.value = 150;
    // randomheght.value = 300;
    setScreenChanger(!screenChanger)
    if (screenChanger) {
      randomWidth.value = '10%';
      randomheght.value = '10%';
      blackSlideWidth.value = '90%';
      blackSlideHeight.value = '90%';
    } else {
      randomWidth.value = '90%';
      randomheght.value = '90%';
      blackSlideWidth.value = '10%';
      blackSlideHeight.value = '10%';
    }
  }



  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: 'pink' }}>
      <ImageBackground source={Images.loginBground} style={{ width: '100%', height: '100%', backgroundColor: 'red', }} resizeMode='cover'>
        <Animated.View style={[{ height: '90%', width: '90%', alignItems: 'center', backgroundColor: 'red', justifyContent: 'center', position: 'absolute', right: 0, top: 0 }, style]}>
         {screenChanger==true? <>
            <View style={{ marginVertical: 20 }}>
              <Text style={styles.textStyles}>Mobile No.</Text>
              <TextInput placeholder='ph no.' style={styles.textInputStyles} />
            </View>
            <View style={{ marginVertical: 20 }}>
              <Text style={styles.textStyles}>Password</Text>
              <TextInput placeholder='password' style={styles.textInputStyles} />
            </View>
            <TouchableOpacity style={styles.btnstyle} onPress={() => navigation.navigate('dashboardSrc')} >
              <Text style={styles.textStyles}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.navigate('forgetpasswordSrc')} >
              <Text style={styles.textStyles}>Forget Password</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 20 }} onPress={() => changes()}>
              <Text style={styles.textStyles}>Don't have an account, <Text style={{ color: 'red' }}>SignIn</Text></Text>
            </TouchableOpacity>
          </>:null}
        </Animated.View>
        <Animated.View style={[{ height: '10%', width: '10%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center', position: 'absolute', left: 0, bottom: 0 }, blackstyle]}>
         {screenChanger == false? <>
            <View style={{ marginVertical: 20 }}>
              <Text style={styles.textStyles}>Mobile No.</Text>
              <TextInput placeholder='ph no.' style={styles.textInputStyles} />
            </View>
            <View style={{ marginVertical: 20 }}>
              <Text style={styles.textStyles}>Password</Text>
              <TextInput placeholder='password' style={styles.textInputStyles} />
            </View>
            <TouchableOpacity style={styles.btnstyle} onPress={() => navigation.navigate('dashboardSrc')} >
              <Text style={styles.textStyles}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.navigate('forgetpasswordSrc')} >
              <Text style={styles.textStyles}>Forget Password</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 20 }} onPress={() => changes()}>
              <Text style={styles.textStyles}>Already have an account, <Text style={{ color: 'red' }}>Login</Text></Text>
            </TouchableOpacity>
          </>: null}
        </Animated.View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default Login
