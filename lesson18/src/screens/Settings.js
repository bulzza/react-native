import React, { useState, useCallback } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

const Settings = ({ navigation }) => {
  const [visitCount, setVisitCount] = useState(0);

  useFocusEffect(
    useCallback(() => {
      // Increment count every time the screen is focused
      setVisitCount(prev => prev + 1);
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Settings screen</Text>
      <Text style={styles.counter}>You have visited this screen {visitCount} time{visitCount !== 1 ? 's' : ''}.</Text>
      <Button 
        title="Go to Home Screen"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  counter: {
    fontSize: 16,
    marginBottom: 20
  }
});

export default Settings;
