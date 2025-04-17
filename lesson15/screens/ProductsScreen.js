import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions
} from 'react-native';
import products from '../data/products.json';

const { width } = Dimensions.get('window');

class ProductsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: []
    };
  }

  componentDidMount() {
    // Load products dynamically from JSON
    this.setState({ productList: products });
  }

  // Function to render each product card
  renderProductCard = ({ item }) => (
    <View style={styles.cardContainer}>
      {/* Optional: Nike logo at the top */}
      <Image
        source={require('../assets/nike_logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.cardContent}>
        <Image

          source={item.image }
          style={styles.shoeImage}
          resizeMode="contain"
        />

        <Text style={styles.brandTitle}>
          <Text style={styles.blueText}>{item.name}</Text>
        </Text>

        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.description}>{item.description}</Text>

        <View style={styles.colorRow}>
          {item.colors.map((color, index) => (
            <View
              key={index}
              style={[styles.colorCircle, { backgroundColor: color }]}
            />
          ))}
        </View>

        <Text style={styles.price}>{item.price}</Text>
      </View>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.screenTitle}>Products Screen</Text>
        <FlatList
          data={this.state.productList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={this.renderProductCard}
          contentContainerStyle={{ alignItems: 'center', paddingBottom: 30 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center'
  },
  cardContainer: {
    width: width * 0.9,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 20,
    alignItems: 'center',
    paddingTop: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4
  },
  logo: {
    width: 40,
    height: 40,
    marginBottom: 10
  },
  cardContent: {
    width: '100%',
    alignItems: 'center',
    padding: 20,
    position: 'relative'
  },
  shoeImage: {
    width: 260,
    height: 130,
    marginTop: 20
  },
  brandTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center'
  },
  blueText: {
    color: '#003087'
  },
  category: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 6,
    color: '#333'
  },
  description: {
    fontSize: 12,
    textAlign: 'center',
    color: '#444',
    marginBottom: 12
  },
  colorRow: {
    flexDirection: 'row',
    marginVertical: 12
  },
  colorCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    marginHorizontal: 6,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  price: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 10
  }
});

export default ProductsScreen;
