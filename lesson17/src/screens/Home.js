import react from "react";
import { Text, View, StyleSheet, Button,Image } from "react-native"; 
import Swiper from "react-native-swiper";
import Icon from "../components/Icons";

const Home=({navigation})=>{
    return(
        <View style={styles.container}>
            <View style={styles.sliderContainer}>
                <Swiper 
                autoplay
                activeDotColor="#22D4FF"
                autoplayTimeout={5}>
                    <View style={styles.item}>
                        <Image
                            source={require('../../assets/slider-1.jpg')}
                            style={styles.imgItem}
                            resizeMode="cover"
                        />
                    </View>

                    <View style={styles.item}>
                        <Image
                            source={require('../../assets/slider-2.jpg')}
                            style={styles.imgItem}
                            resizeMode="cover"
                        />
                    </View>

                    <View style={styles.item}>
                        <Image
                            source={require('../../assets/slider-4.jpg')}
                            style={styles.imgItem}
                            resizeMode="cover"
                        />
                    </View>

                    <View style={styles.item}>
                        <Image
                            source={require('../../assets/slider-1.jpg')}
                            style={styles.imgItem}
                            resizeMode="cover"
                        />
                    </View>
                </Swiper>
            </View>
        <View style={styles.iconsContainer}>
            <Icon name="apple" iconText="Iphone" />
            <Icon name="android" iconText="Android" />
            <Icon name="laptop" iconText="Laptop" />
        </View>

        <View style={styles.iconsContainer}>
            <Icon name="tablet" iconText="Tablet" />
            <Icon name="mouse" iconText="Mouse" />
            <Icon name="keyboard-outline" iconText="Keyboard" />
        </View>

        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    sliderContainer:{
        width:'90%',
        height:200,
        justifyContent:'center',
        alignSelf:'center',
        marginTop:10,
        borderRadius:8
    },
    imgItem:{
        width:'100%',
        height:'100%',
        borderRadius:8
    },
    item:{
        flex:1,
        justifyContent:'center'
    },
    iconsContainer:{
        width:'90%',
        alignSelf:'center',
        marginTop:30,
        flexDirection:'row',
        justifyContent:'space-between'

    }
})

export default Home;