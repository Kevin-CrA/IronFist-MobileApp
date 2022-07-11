import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Alert, Button } from 'react-native';
import React,{useState} from 'react';
import Slider from '@react-native-community/slider';
import Constants from 'expo-constants';




export default function Control() {
  //const to set the values of the sliders 
  const [x, setX] = useState('50');
  const [y, setY] = useState('50');
  const [z, setZ] = useState('50');
  const [sliding, setsliding] = useState('Inactive');

  //send the values printed of the sliders to the server
  console.log('X= '+x);
  console.log('Y= '+y);

  
  return (
    <View style={{marginTop: Constants.statusBarHeight, flexGrow:1 [styles.container, styles.separacion]}}>


      <TouchableWithoutFeedback onPress={() => Alert.alert('Picao')}>
        <Text style={{fontSize:20, fontWeight: 'bold'}}>No picar</Text>
      </TouchableWithoutFeedback>
      

      <Text style={{fontSize:20, fontWeight: 'bold', color:'red'}}>{x}</Text>
      <Text style={{fontSize:20, fontWeight: 'bold'}}>{sliding}</Text>
      <Slider
        style={[styles.separacion]}
       
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#000000"
        thumbTintColor="#000000"
        value={50}
        onValueChange={(value) => setX(parseInt(value))}
        /*onSlidingStart={() => setsliding('Sliding Started')}
        onSlidingComplete={() => setsliding('Sliding Complete')}*/
      />


      {/*Y axis slider, settin min and max values*/}
      <Text style={{fontSize:20, fontWeight: 'bold', color:'blue'}}>{y}</Text>
      <Slider
        style={[styles.separacion]}
       
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#000000"
        thumbTintColor="#000000"
        value={50}
        onValueChange={(value) => setY(parseInt(value))}
        /*onSlidingStart={() => setsliding('Sliding Started')}
        onSlidingComplete={() => setsliding('Sliding Complete')}*/
      

      />

    </View>
    
    
  );

}





/*export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separacion: {
    width: 200,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 'auto',
  },
});