import React from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Button } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

//import LoginSVG from '../assets/images/misc/login.svg';
import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';


export default function LoginScreen(props){
    /* Sets the navigation to go to the main page when clicking login with the correct credentials */
    const { navigation } = props
    console.log(props)
    const goToPage = () =>{
        navigation.navigate("Drawer")}

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center'}}>

        </View>

        <Text
          style={{
            //fontFamily: 'Normal',
            fontSize: 28,
            fontWeight: '500',
            color: 'green',
            marginBottom: 30,
          }}>
          Login
        </Text>

        <InputField
          label={'ID'}
          icon={
            <MaterialIcons
            name="baby-changing-station"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          }
          keyboardType="email-address"
        />

{/*  */}
<InputField
          label={'Password'}
          icon={
            <Ionicons
            name="lock-closed-outline"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          }
          inputType="password"
          fieldButtonFunction={() => {}}
        />
        
        <CustomButton label={"Login"} onPress={goToPage} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text>Forgot Information?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginInfromation')}>
            <Text style={{color: 'blue', fontWeight: '700'}}> See more</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
