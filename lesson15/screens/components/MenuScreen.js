import react from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import StudentsScreen from "./Components/StudentsScreen";


const MenuScreen = (props)=> {

    // console.log(props)
    console.log(props.navigation)
    return(
        <View>
            <Text style={styles.text}>Welcome to Menu Screen!</Text>
            <Button 
            color={"blue"}
                title = 'Go To List Screen'
                onPress={()=>props.navigation.navigate('ListScreen')}
            />

           
            <Button  style={styles.btn}
            color={"blue"}
                title = 'Go To Student Screen'
                onPress={()=>props.navigation.navigate('StudentsScreen')}
            />

            
            <Button  style={styles.btn}
            color={"blue"}
                title = 'Go To Box  Screen'
                onPress={()=>props.navigation.navigate('BoxScreen')}
            />

             
            <Button  style={styles.btn}
                 color={"blue"}
                title = 'Go To Flex  Screen'
                onPress={()=>props.navigation.navigate('FlexBox')}
            />

            <Button  style={styles.btn}
                 color={"blue"}
                title = 'Go To Mini Challenge Screen'
                onPress={()=>props.navigation.navigate('MiniChallenge')}
            />
            <Button  style={styles.btn}
                 color={"blue"}
                title = 'Go To Mini BoxScreenChallenge Screen'
                onPress={()=>props.navigation.navigate('BoxScreenChallenge')}
            />
            <Button  style={styles.btn}
                 color={"blue"}
                title = 'Go To Mini AdvancedBoxScreenChallenge Screen'
                onPress={()=>props.navigation.navigate('AdvancedBoxScreenChallenge')}
            />
           
           
           
            <TouchableOpacity
                style={styles.button}
                onPress={() => props.navigation.navigate('Button')}
            >
                <Text style={styles.buttonText}>Go To Buttons Screen</Text>
            </TouchableOpacity>
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
