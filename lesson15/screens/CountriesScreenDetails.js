import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CountriesScreenDetails = ({ route }) => {
    const { country } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>🌍 {country.name}</Text>
                <View style={styles.divider} />
                <Text style={styles.detail}><Text style={styles.label}>Code:</Text> {country.country}</Text>
                <Text style={styles.detail}><Text style={styles.label}>Description:</Text> {country.description}</Text>
                <Text style={styles.detail}><Text style={styles.label}>Population:</Text> {country.population.toLocaleString()}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
   container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f0f8ff",
        alignItems: "center",
        justifyContent: "center"
   },
   card: {
        backgroundColor: "#ffffff",
        padding: 25,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 6,
        width: '90%',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "#e0e0e0"
   },
   title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#0077b6",
        marginBottom: 15
   },
   divider: {
        width: '80%',
        height: 3,
        backgroundColor: "#0077b6",
        marginVertical: 12,
        borderRadius: 5
   },
   detail: {
        fontSize: 18,
        marginVertical: 8,
        color: "#444",
        textAlign: "center",
        paddingHorizontal: 10,
        lineHeight: 24
   },
   label: {
        fontWeight: "600",
        color: "#023e8a"
   }
});

export default CountriesScreenDetails;