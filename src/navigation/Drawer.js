import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import HomeScreen from '../screens/Home';
import SettingsScreen from '../screens/Settings';
import Control from '../screens/Control';
import SplashScreen from '../screens/SplashScreen';

const Drawer = createDrawerNavigator();

export default function NavigationDrawer(){
    return(
        <Drawer.Navigator initialRouteName='SplashScreen'>
            <Drawer.Screen name='Control' component={Control}/>
            <Drawer.Screen name='Home' component={HomeScreen}/>
            <Drawer.Screen name='Settings' component={SettingsScreen}/>
        </Drawer.Navigator>
    )
}