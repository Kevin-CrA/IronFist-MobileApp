import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";

import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/Login';
import NavigationDrawer from './Drawer';

const Stack = createNativeStackNavigator();

export default function NavigationStack(){
    return(
        <Stack.Navigator initialrouterName="SplashScreen">
            <Stack.Screen name="SplashScreen" component={SplashScreen}options={{headerShown:false}}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Drawer" component={NavigationDrawer}options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}
