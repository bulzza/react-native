import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const Item = ({ item }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imgContainer}>
        <Image
          source={{ uri: item.image }}
          style={styles.img}
          resizeMethod="cover"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    height: 130,
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden",
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 8,
  },
  textContainer: {
    paddingHorizontal: 10,
    marginVertical: 10,
    width: "70%",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  category: {
    fontSize: 16,
    color: "#22D4FF",
  },
  desc: {
    fontStyle: "italic",
  },
  price: {
    fontWeight: "bold",
    marginTop: 5,
    backgroundColor: "#384053",
    color: "white",
    borderRadius: 100,
    paddingHorizontal: 10,
    textAlign: "center",
    alignSelf: "flex-start",
  },
});

export default Item;
