import { StyleSheet, View, Text, Button} from 'react-native';
import React from 'react'




export default function LoginScreen(props){
    const { navigation } = props
    console.log(props)
    const goToPage = () =>{
        navigation.navigate("Drawer")
    }
    return (
        <View style={styles.container}>
            <Text>LoginScreen</Text>
            <Button onPress={goToPage} title='Go to d'/>
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
});