import react from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import About from "../screens/About";
import Profile from "../screens/Profile";

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
export {MainStackNavigator, AboutStackNavigator};


