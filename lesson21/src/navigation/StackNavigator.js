import react from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import About from "../screens/About";

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

export {MainStackNavigator, AboutStackNavigator};


