import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image} from 'react-native';

const Challenge2 = ({ route }) => {
    const { userId } = route.params;
    const [user, setUser] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
           
            const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            const userData = await userResponse.json();
            setUser(userData);
            
            const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postsId=${userId}`);
            const commentsData = await commentsResponse.json();
            setComments(commentsData.slice(0, 5));
            
           
        };

        fetchUserData();
    }, [userId]);

    return (
        <View style={styles.container}>
            {user ? (
                <View style={styles.card}>
                    <Text style={styles.header}>{user.name}</Text>
                    <Text style={styles.info}>👤 Username: {user.username}</Text>
                    <Text style={styles.info}>📧 Email: {user.email}</Text>
                    <Text style={styles.info}>📞 Phone: {user.phone}</Text>
                    <Text style={styles.info}>🌐 Website: {user.website}</Text>
                    <Text style={styles.subHeader}>📝Comments:</Text>
                    <FlatList
                        data={comments}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.postContainer}>
                              <Text style={styles.postTitle}>Title: {item.name}</Text>
                              <Text style={styles.postEmail}>Email: {item.email}</Text>
                              <Text style={styles.postBody}>Comment: {item.body}</Text>
                            </View>
                        )}
                    />
                </View>
            ) : (
                <Text style={styles.loadingText}>Loading user details...</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f5f5f5",
    },
    card: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    header: {
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
        color: "#333",
    },
    subHeader: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
        color: "#444",
    },
    info: {
        fontSize: 16,
        marginBottom: 8,
        color: "#555",
    },
    postContainer: {
        backgroundColor: "#eef",
        padding: 15,
        marginVertical: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    postTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
       
        color: "#222",
    },
    postBody: {
        fontSize: 14,
        marginTop: 5,
        color: "#666",
    },
    loadingText: {
        fontSize: 18,
        textAlign: "center",
        marginTop: 50,
        color: "#888",
    },
    postEmail:{
        fontSize: 16,
        fontWeight: "400",
        marginTop: 1,
        marginBottom: 1,
    }
});

export default Challenge2;