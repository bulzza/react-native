import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

class UserPostsScreen extends React.Component {
    constructor(props) {
        super(props);
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
                       <TouchableOpacity onPress={()=>this.props.navigation.navigate('UserPostsScreenDetail', {userId: item.id})}>
                         <View style={styles.userContainer}>
                                <Text style={styles.userInfo}>ID: {item.id}</Text>
                                <Text style={styles.userTitle}>Name: {item.name}</Text>
                                <Text style={styles.userTitle}>Username: {item.username}</Text>
                                <Text style={styles.userTitle}>Email: {item.email}</Text>
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
    },
    header: {
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
        color: "#000",
        marginBottom: 20,
    },
    touchable: {
        borderRadius: 12,
        overflow: "hidden",
    },
    userContainer: {
        backgroundColor: "#fff",
        padding: 18,
        marginVertical: 10,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 5,
        borderWidth: 1,
        borderColor: "#ddd",
    },
    userInfo: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 5,
    },
    userTitle: {
        fontSize: 15,
        color: "#555",
        marginBottom: 3,
    }
});

export default UserPostsScreen;
