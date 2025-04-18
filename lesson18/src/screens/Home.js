import react from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const Home=({navigation})=>{
    return(
        <View style={styles.container}>
            <Text>Welcome to Home screen</Text>
            <Button 
            title="Go to About Screen"
            onPress={()=>navigation.navigate('About')}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignContent:'center',
        justifyContent:'center'
    }
})

export default Home;