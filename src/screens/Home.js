import { StyleSheet, View, Text, Button} from 'react-native';
import React from 'react'




export default function HomeScreen(props){
    const { navigation } = props
    console.log(props)
    const goToHome = () =>{
        navigation.navigate("Settings")}
    const goToControl = () =>{
        navigation.navigate("Control")
    }
    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <Button onPress={goToHome} title='Go to Settings'/>
            <Text style={styles.space}>Robot Control</Text>
            <Button onPress={goToControl} title='Go to control'/>
        </View>
    )
}








const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    space:{
        marginTop: 10
    }
});
