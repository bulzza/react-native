import react from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import About from "../screens/About";
import Iphones from "../screens/Iphones";
import Android from "../screens/Android";
const Stack=createStackNavigator();

const screenOptionStyle={
    headerStyle:{
        backgroundColor:'#385053',
    },
    headerTintColor:'white'
}
const MainStackNavigator=({navigation})=>{
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}

const AboutStackNavigator=({navigation})=>{
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
    )
}

const IphonesStackNavigator=({navigation})=>{
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Iphones" component={Iphones} />
        </Stack.Navigator>
    )
}

const AndroidStackNavigator=({navigation})=>{
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Android" component={Android} />
        </Stack.Navigator>
    )
}

export {MainStackNavigator, AboutStackNavigator, IphonesStackNavigator,AndroidStackNavigator};


