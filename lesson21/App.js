import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './src/navigation/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
//import MainStackNavigator from './src/navigation/StackNavigator';
//import BottomTabNavigator from './src/navigation/TabNavigator';
import DrawerNavigator from './src/navigation/DrawerNavigator';

const App = () => {
  return (
    <NavigationContainer>
      {/* <BottomTabNavigator /> */}
      <DrawerNavigator/>
    </NavigationContainer>
  );
};

export default App;


