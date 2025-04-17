import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-web";
import PostScreen from "./screens/components/PostScreen";
import UsersScreen from "./screens/components/UsersScreen";
import MenuScreen from "./screens/MenuScreen";
import UserPostsScreen from "./screens/components/UserPostsScreen";
import UserPostsScreenDetail from "./screens/components/UserPostsScreenDetail";
import Challenge1 from "./screens/components/Challenge1";
import Challenge2 from "./screens/components/Challenge2";
import Layout from "./screens/Layout";
import CardLayout from "./screens/CardLayout";
import CountriesScreen from "./screens/CountriesScreen";
import CountriesScreenDetails from "./screens/CountriesScreenDetails";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
      <Stack.Screen name="MenuScreen" component={MenuScreen} />
      <Stack.Screen name="UsersScreen" component={UsersScreen} />
      <Stack.Screen name="PostScreen" component={PostScreen} />
      <Stack.Screen name="UserPostsScreen" component={UserPostsScreen} />
      <Stack.Screen name="UserPostsScreenDetail" component={UserPostsScreenDetail}/>
      <Stack.Screen name="User" component={Challenge1}/>
      <Stack.Screen name="UserPhotos" component={Challenge2}/>
      <Stack.Screen name="Layout" component={Layout}/>
      <Stack.Screen name="CardLayout" component={CardLayout}/>
      <Stack.Screen name="CountriesScreen" component={CountriesScreen} />
      <Stack.Screen name="CountriesScreenDetails" component={CountriesScreenDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});