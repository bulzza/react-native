import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {AboutStackNavigator} from './StackNavigator';
import BottomTabNavigator from './TabNavigator';
import { Image } from "react-native";
import CustomDrawerContent from "./CustomDrawerContent";
const Drawer= createDrawerNavigator();

const DrawerNavigator=()=>{

    return(
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
    

 
      
            <Drawer.Screen name="Home" component={BottomTabNavigator} />
            <Drawer.Screen name="About" component={AboutStackNavigator} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator