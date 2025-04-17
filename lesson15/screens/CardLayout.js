import React from "react";
import { View, StyleSheet } from "react-native";
import Card from "./components/Card";
import Listings from "./components/Listings";

const CardLayout = () => {
  return (
    <View style={styles.container}>
      <Card 
        title="Red jacket for sale!" 
        subTitle="$100" 
        image={require("../assets/layout/jacket.jpg")} 
      />

    <Listings 
        sellerImage={require("../assets/layout/mosh.jpg")} 
        sellerName="Mosh Hamedani"
        listings="5"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
    padding: 20,
  },
});

export default CardLayout;
