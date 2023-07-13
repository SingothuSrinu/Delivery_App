import React, { useState } from 'react';
import { View, Text, Button, SafeAreaView, Image, ScrollView, TouchableOpacity, } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import styles from './styles';
import Animated, { AnimateStyle, Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

function Feed({ navigation }) {
    const [screenChanger,setScreenChanger]=useState('false')
    const randomWidth = useSharedValue('90%');
    const randomheght = useSharedValue('90%');
    const blackSlideHeight= useSharedValue('10%')
    const blackSlideWidth= useSharedValue('10%')

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
            randomWidth.value='10%';
            randomheght.value='10%';
            blackSlideWidth.value='90%';
            blackSlideHeight.value='90%';
        } else {
            randomWidth.value='90%';
            randomheght.value='90%';
            blackSlideWidth.value='10%';
            blackSlideHeight.value='10%';
        }
    }

    return (
        <View style={{ flex: 1, }}>
            <Text>Feed Screen</Text>
            <Button title='open' onPress={() => navigation.openDrawer()} />
            {/* <Button title='Increse Width' onPress={() => incresesize()} /> */}
            <Button
                title="Change Width"
                onPress={() => {
                    // randomWidth.value = 150;
                    changes()
                }}
            />
            <View style={{width:350,height:400,backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
                <Animated.View
                    style={[{ width: '80%', height: '90%', backgroundColor: 'green',  position: 'absolute', right: 0,top:0 }, style]}
                />
                <Animated.View
                    style={[{ width: '20%', height: '10%', backgroundColor: 'black', position: 'absolute', left: 0 ,bottom:0}, blackstyle]}
                />
            </View>
        </View>
    );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerActiveTintColor: "white",
                drawerContentStyle: { width: 0 },
                drawerStyle: {
                    backgroundColor: 'white',
                    width: 300,
                },
                // drawerLabel:false,
                drawerIcon: false, headerShown: false
            }}
            //   useLegacyImplementation
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen name="hgdse" component={Feed} />
            {/* <Drawer.Screen name="Article" component={Article} /> */}
        </Drawer.Navigator>
    );
}

export default function DashBoard() {
    return (
        <MyDrawer />
    );
}

function CustomDrawerContent(props) {
    return (
        <ScrollView>
            <View style={{ alignItems: 'center' }}>
                <Image
                    source={{ uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/react_logo.png' }}
                    style={{ width: 150, height: 150, borderRadius: 75, marginTop: 20, backgroundColor: 'red' }}
                />
                <TouchableOpacity style={styles.btnstyle} onPress={() => navigation.navigate('dashboardSrc')} >
                    <Text style={styles.textStyles}>Login</Text>
                </TouchableOpacity>
                <DrawerContentScrollView {...props}>
                    {/* <DrawerItem label="Help" onPress={() => alert('Link to help')} /> */}
                    {/* <DrawerItemList {...props} /> */}
                </DrawerContentScrollView>
            </View>
        </ScrollView>
    );
}
