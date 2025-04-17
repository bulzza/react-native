import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import data from "../data/countries.json";

class CountriesScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: data,
            searchText: ""
        };
    }

    handleSearch = (text) => {
        this.setState({ searchText: text });
    };

    getFilteredCountries = () => {
        const { searchText, countries } = this.state;
        return countries.filter(country =>
            country.name.toLowerCase().includes(searchText.toLowerCase())
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.screenTitle}>Countries Screen</Text>
                
                <TextInput
                    style={styles.searchBar}
                    placeholder="Search for a country..."
                    value={this.state.searchText}
                    onChangeText={this.handleSearch}
                />

                <FlatList
                    data={this.getFilteredCountries()}
                    keyExtractor={country => country.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('CountriesScreenDetails', { country: item })}>
                            <View style={styles.cardWrapper}>
                                <Text>Country Name: {item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                /> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#f5f5f5",
        alignItems: "center",
        justifyContent: "center"
    },
    screenTitle: {
        fontSize: 20,
        textAlign: "center",
        marginVertical: 15,
        fontWeight: "bold",
    },
    searchBar: {
        height: 40,
        width: '90%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    cardWrapper: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: "#fff",
        borderRadius: 5,
        elevation: 3,
        width: 300,
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default CountriesScreen;
