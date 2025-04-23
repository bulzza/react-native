import react from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import About from "../screens/About";
import Profile from "../screens/Profile";
import Contact from "../screens/Contact";
import Settings from "../screens/Settings";

const Stack=createStackNavigator();

const screenOptionStyle={
    headerStyle:{
        backgroundColor:'#FF6347'
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

const ProfileStackNavigator=({navigation})=>{
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    )
}

const ContactStackNavigator=({navigation})=>{
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Contact" component={Contact} />
        </Stack.Navigator>
    )
}

const SettingsStackNavigator=({navigation})=>{
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
    )
}


export {MainStackNavigator, AboutStackNavigator, ProfileStackNavigator, ContactStackNavigator,  SettingsStackNavigator};


