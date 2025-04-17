
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";


const Listings = ({ sellerImage, sellerName, listings }) => {
    return (
      <View style={styles.listingContainer}>
        <Image source={sellerImage} style={styles.sellerImage} />
        <View>
          <Text style={styles.sellerName}>{sellerName}</Text>
          <Text style={styles.listings}>{listings} Listings</Text>
        </View>
      </View>
    );
  };
  


const styles = StyleSheet.create({
    listingContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 15,
      padding: 15,
      backgroundColor: "#fff",
      borderRadius: 10,
    },
    sellerImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
    },
    sellerName: {
      fontSize: 16,
      fontWeight: "bold",
    },
    listings: {
      fontSize: 14,
      color: "#6e6969",
    },
  });


  export default Listings;