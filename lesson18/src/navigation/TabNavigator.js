// src/navigation/TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home'; // Adjust according to your file path
import Profile from '../screens/Profile'; // Adjust according to your file path
import About from '../screens/About'; // Adjust according to your file path
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; // Optional: for custom icons

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1F1F1F',
        },
        headerTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#2A2A2A',
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#A1A1A1',
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="information" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
