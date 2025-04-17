import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

class UsersScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            users: []
        };
    }

    async componentDidMount() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const jsonData = await response.json();
            this.setState({ users: jsonData });
        } catch (error) {
            console.error("Error fetching users:", error);
        }
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
                        <View style={styles.userContainer}>
                            <Text style={styles.userInfo}>ID: {item.id}</Text>
                            <Text style={styles.userTitle}>Name: {item.name}</Text>
                            <Text style={styles.userTitle}>Username: {item.username}</Text>
                            <Text style={styles.userTitle}>Email: {item.email}</Text>
                        </View>
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
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
    },
    userContainer: {
        backgroundColor: "#fff",
        padding: 15,
        marginVertical: 8,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    userInfo: {
        fontSize: 16,
        fontWeight: "bold",
    },
    userTitle: {
        fontSize: 14,
        color: "#555",
    }
});

export default UsersScreen;
