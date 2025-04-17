import React from "react";
import { Text, View, StyleSheet,Button, TouchableOpacity, ScrollView} from "react-native";
import iphones from "../data/iphones.json";
import Item from "../components/Item";
class Iphones extends React.Component{

    constructor() {
        super();
        this.state = {
          product: [],
        };
      }
    
      componentDidMount() {
        this.setState({
          product: iphones,
        });
      }
  
      render(){
        return(
            <ScrollView>
                <View style={styles.container}>
                <Text style={styles.text}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Text>
              

    
                {/* Products */}
              <View style={styles.productsContainer}>
                
                {this.state.product.map((item) => (
                  <Item key={item.id.toString()} item={item} />
                ))}
    
                <TouchableOpacity style={styles.btn}>
                  <Text style={styles.btnText}>View More</Text>
                </TouchableOpacity>
              </View>
            </View>
            </ScrollView>
        )
      }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignContent:'center',
        justifyContent:'center'
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
      },
      sliderContainer: {
        width: "90%",
        height: 200,
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 10,
        borderRadius: 8,
      },
      imgItem: {
        width: "100%",
        height: "100%",
        borderRadius: 8,
      },
      item: {
        flex: 1,
        justifyContent: "center",
      },
      iconsContainer: {
        width: "90%",
        alignSelf: "center",
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-between",
      },
      productsContainer: {
        marginTop: 30,
        paddingHorizontal: 16,
      },
      title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
      },
      btn: {
        marginTop: 20,
        backgroundColor: "#22D4FF",
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: "center",
      },
      btnText: {
        color: "#fff",
        fontWeight: "bold",
      },
      text:{
        fontSize: 16,
        
        marginBottom: 10,
        textAlign:'center',
        marginTop:50,
        marginHorizontal: 10,
      }
})
export default Iphones;