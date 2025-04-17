import react from "react";
import { Text, View, StyleSheet,Button } from "react-native";

const About=({navigation})=>{
    return(
        <View style={styles.container}>
            <Text>Welcome to About screen</Text>
            <Button 
                        title="Go to back to Home"
                        onPress={()=>navigation.goBack()}
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
export default About;