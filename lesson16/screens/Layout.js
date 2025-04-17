import React from "react";
import { View, Image, Text, ImageBackground, StyleSheet } from "react-native";
import Button from "./components/Button";

const Layout = (props) => {
  return (
    <ImageBackground 
      source={require("../assets/layout/background.jpg")}
      style={styles.background}
      blurRadius={5} 
    >
      <View style={styles.container}>
        
        <Image source={require("../assets/layout/logo-red.png")} style={styles.logo} />
        
        <Text style={styles.title}>Sell What You Don't Need</Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <Button 
          text="LOGIN" 
          backgroundColor="#FF5A5F" 
          onPress={()=>props.navigation.navigate('CardLayout')}
          style={styles.button}
        />
        <Button 
          text="REGISTER" 
          backgroundColor="#17C3B2" 
          onPress={()=>props.navigation.navigate('CardLayout')}
          style={styles.button}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100%",
    
  },
  container: {
    alignItems: "center",
    marginTop: 50,
  },
  logo: {
    width: 120, 
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 30,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    bottom: 30,
  },
  button: {
    width: "80%",
    

  },
});

export default Layout;