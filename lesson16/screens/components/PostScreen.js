import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

class PostScreen extends React.Component {

    constructor(){
        super();
        this.state = {
            posts: [],
            limit: 10,
    }
   }

   async componentDidMount(){
        const data = await fetch('https://jsonplaceholder.typicode.com/posts');
        const jsonData = await data.json();
        this.setState({posts: jsonData.slice(0, this.state.limit)});
   }

   render(){

    const{posts} = this.state;

    return(
        <View style={styles.container}>

        <Text style={styles.header}>Post Screen</Text>
          <FlatList 
          
          keyExtractor={posts => posts.id}
          data={posts} renderItem={({item}) =>(

            <View style={styles.postContainer}>
                <Text style={styles.postId} >{item.id}</Text>
                <Text style={styles.postTitle}>{item.title}</Text>
            </View>

          )
        }

          />
        </View>
    )
   }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f8f9fa',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    postContainer: {
        backgroundColor: '#fff',
        padding:10,
        marginVertical: 5,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 4,
        elevation: 2,
    },
    postId: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    postTitle: {
        fontSize: 14,
        color: '#666',
    },

});

export default PostScreen;