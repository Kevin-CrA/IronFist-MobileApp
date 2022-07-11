import "react-native-gesture-handler"
import { NavigationContainer } from '@react-navigation/native';

import NavigationDrawer from "./src/navigation/Drawer";
import NavigationStack from "./src/navigation/NavigationStack";

export default function App() {
  return (
    <NavigationContainer initialRouterName='SplashScreen'>
      <NavigationStack/>
    </NavigationContainer>
  );
}

/*const style = StyleSheet.create({
  container:{
    backgroundColor: "#363636"
  }
})*/