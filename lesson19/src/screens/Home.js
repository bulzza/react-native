import react from "react";
import { ScrollView, Text, View, StyleSheet, Button, Image} from "react-native";
import Swiper from "react-native-swiper";

const Home=({navigation})=>{
    return(
        <ScrollView  style={styles.container}>
            {/* <Text>Welcome to Home screen</Text>
            <Button 
            title="Go to About Screen"
            onPress={()=>navigation.navigate('About')}
            />

    <Button 
            title="Open Drawer"
            onPress={()=>navigation.openDrawer()}
            /> */}
            <View style={styles.sliderContainer}>
                <Swiper 
                autoplay 
                activeDotColor="#22D4FF"
                autoplayTimeout={5}
                showButtons={true} >
                    <View style={styles.item}>
                        <Image source={require('../../assets/slider-1.jpg')}
                        style={styles.imgItem}
                        resizeMode="cover"/>
                    </View>
                    <View style={styles.item}>
                    <Image source={require('../../assets/slider-2.jpg')}
                        style={styles.imgItem}
                        resizeMode="cover"/>
                    </View>
                    <View style={styles.item}>
                    <Image source={require('../../assets/slider-3.jpg')}
                        style={styles.imgItem}
                        resizeMode="cover"/>
                    </View>
                    <View style={styles.item}>
                    <Image source={require('../../assets/slider-4.jpg')}
                        style={styles.imgItem}
                        resizeMode="cover"/>
                    </View>
                </Swiper>

            </View>



            <View style={styles.sliderContainer}>
                <Swiper 
                    autoplay
                    autoplayTimeout={3}
                    dotColor="#ccc"
                    activeDotColor="#FF6347"
                    loop
                    showsButtons={false}
                    horizontal={false} >
                    <View style={styles.item}>
                        <Image source={require('../../assets/slider-1.jpg')}
                        style={styles.imgItem}
                        resizeMode="cover"/>
                    </View>
                    <View style={styles.item}>
                    <Image source={require('../../assets/slider-2.jpg')}
                        style={styles.imgItem}
                        resizeMode="cover"/>
                    </View>
                    <View style={styles.item}>
                    <Image source={require('../../assets/slider-3.jpg')}
                        style={styles.imgItem}
                        resizeMode="cover"/>
                    </View>
                    <View style={styles.item}>
                    <Image source={require('../../assets/slider-4.jpg')}
                        style={styles.imgItem}
                        resizeMode="cover"/>
                    </View>
                </Swiper>

            </View>

            <View style={styles.sliderContainer}>
                <Swiper 
                autoplay 
                activeDotColor="#22D4FF"
                autoplayTimeout={5}
                showButtons={true} >
                    <View style={styles.item_color1}>
                        <Text>Slider 1</Text>
                    </View>
                    <View style={styles.item_color2}>
                        <Text>Slider 2</Text>
                    </View>
                    <View style={styles.item_color3}>
                        <Text>Slider 3</Text>
                    </View>
                    <View style={styles.item_color4}>
                        <Text>Slider 4</Text>
                    </View>
                </Swiper>

            </View>

            

        </ScrollView >
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
        marginTop:10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8,
        margin: 15,

    },
    imgItem:{
        width:'100%',
        height:'100%',
        borderRadius:8,
    },
    item:{
        flex:1,
        justifyContent:'center',
       
    },
    item_color1:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'red',
        borderRadius:8,
    },
    item_color2:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'blue',
        borderRadius:8,
    },
    item_color3:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'green',
        borderRadius:8,
    },
    item_color4:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'yellow',
        borderRadius:8,
    },
    
})

export default Home;