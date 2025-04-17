import react from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';



const MenuScreen = (props)=> {

    // console.log(props)
    console.log(props.navigation)
    return(
        <View>
            <Text style={styles.text}>Welcome to Menu Screen!</Text>
          
            <Button style={styles.button} title="Go to Post Screen" onPress={()=>props.navigation.navigate('PostScreen')} />

            <Button style={styles.button} title="Go to Users Post Screen" onPress={()=>props.navigation.navigate('UserPostsScreen')} />

            <Button style={styles.button} title="Go to Challenge Screen" onPress={()=>props.navigation.navigate('User')} />
           
            <Button style={styles.button} title="Go to Users Screen" onPress={()=>props.navigation.navigate('UsersScreen')} />

            <Button style={styles.button} title="Go to Countries Screen" onPress={()=>props.navigation.navigate('CountriesScreen')} />

            <Button style={styles.button} title="Go to Layout Screen" onPress={()=>props.navigation.navigate('Layout')} />
        </View>

    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 20,
    },
    button: {
        backgroundColor: 'cyan', 
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 5,
        marginVertical: 10,
        width: '100%', 
        alignItems: 'center',
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    btn:{
        color: 'white',
        fontSize: 15, 
        textTransform: 'uppercase',
        textAlign: 'center',
    }
})

export default MenuScreen;
