import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

class Challenge1 extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
            limit: 5,
        };
    }

    async componentDidMount() {
        
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const jsonData = await response.json();
        this.setState({ users: jsonData.slice(0, this.state.limit) });
    
    }

    render() {
        const { users } = this.state;

        return (
            <View style={styles.container}>
                <Text style={styles.header}>User Screen</Text>
                <FlatList
                    keyExtractor={users => users.id}
                    data={users}
                    renderItem={({ item }) => (
                       <TouchableOpacity onPress={()=>this.props.navigation.navigate('UserPhotos', {userId: item.id})}>
                         <View style={styles.userContainer}>
                            <Text style={styles.userInfo}>ID: {item.id}</Text>
                            <Text style={styles.userTitle}>Name: {item.name}</Text>
                            <Text style={styles.userTitle}>Username: {item.username}</Text>
                            <Text style={styles.userTitle}>Email: {item.email}</Text>
                            <Text style={styles.userTitle}>Address: {item.address.street} </Text>
                            <Text style={styles.userTitle}>Phone: {item.phone} </Text>
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
        padding: 20,
        backgroundColor: "#f5f5f5",
    },
    header: {
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        color: "#333",
        textTransform: "uppercase",
        letterSpacing: 1.2,
    },
    userContainer: {
        backgroundColor: "#fff",
        padding: 15,
        marginVertical: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
        alignItems: "flex-start",
        borderLeftWidth: 5,
        borderLeftColor: "#007BFF",
    },
    userInfo: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#222",
        marginBottom: 5,
    },
    userTitle: {
        fontSize: 15,
        color: "#555",
        
    },
   
});

export default Challenge1;
