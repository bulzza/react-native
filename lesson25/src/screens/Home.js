import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper";
import Icon from "../components/Icons";
import Item from "../components/Item";
import data from "../data/data.json";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      product: [],
    };
  }

  componentDidMount() {
    this.setState({
      product: data,
    });
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {/* Slider */}
          <View style={styles.sliderContainer}>
            <Swiper autoplay activeDotColor="#22D4FF" autoplayTimeout={5}>
              <View style={styles.item}>
                <Image
                  source={require("../../assets/slider-1.jpg")}
                  style={styles.imgItem}
                  resizeMode="cover"
                />
              </View>

              <View style={styles.item}>
                <Image
                  source={require("../../assets/slider-2.jpg")}
                  style={styles.imgItem}
                  resizeMode="cover"
                />
              </View>

              <View style={styles.item}>
                <Image
                  source={require("../../assets/slider-4.jpg")}
                  style={styles.imgItem}
                  resizeMode="cover"
                />
              </View>

              <View style={styles.item}>
                <Image
                  source={require("../../assets/slider-1.jpg")}
                  style={styles.imgItem}
                  resizeMode="cover"
                />
              </View>
            </Swiper>
          </View>

          {/* Icons */}
          <View style={styles.iconsContainer}>
            <Icon name="apple" iconText="Iphone" />
            <Icon name="android" iconText="Android" />
            <Icon name="laptop" iconText="Laptop" />
          </View>

          <View style={styles.iconsContainer}>
            <Icon name="tablet" iconText="Tablet" />
            <Icon name="mouse" iconText="Mouse" />
            <Icon name="keyboard-outline" iconText="Keyboard" />
          </View>

          {/* Products */}
          <View style={styles.productsContainer}>
            <Text style={styles.title}>Most popular products</Text>

            {this.state.product.map((item) => (
              <Item key={item.id.toString()} item={item} />
            ))}

            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>View More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  sliderContainer: {
    width: "90%",
    height: 200,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 10,
    borderRadius: 8,
  },
  imgItem: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  item: {
    flex: 1,
    justifyContent: "center",
  },
  iconsContainer: {
    width: "90%",
    alignSelf: "center",
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productsContainer: {
    marginTop: 30,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  btn: {
    marginTop: 20,
    backgroundColor: "#22D4FF",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Home;
