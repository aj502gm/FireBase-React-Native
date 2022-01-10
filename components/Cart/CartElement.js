import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, YellowBox } from 'react-native'

const CartElement = ({title, price, amount}) => {
    return (
        <View style = {styles.container}>
            <View style = {styles.element}>
                <View style = {styles.leftSideCart}>
                    <Text style = {styles.cartTitle}>{title}</Text>
                    <Text  style = {styles.cartTitle}>{price}</Text>
                </View>
                <View style = {styles.RightSideCart}> 
                    <TouchableOpacity style = {styles.cartBtn}>
                        <Text style = {{color: "white"}}>+</Text>
                    </TouchableOpacity>
                    <Text style = {styles.cartElementText}>{amount}</Text>
                    <TouchableOpacity  style = {styles.cartBtn}>
                        <Text style = {{color: "white"}}>-</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
   container:{
       
       width: "100%",
   },
   element:{
       backgroundColor: "gray",
       padding: 5,
       marginBottom: 20,
       maxHeight: 200,
   },
   leftSideCart:{
       backgroundColor:"yellow",
       justifyContent: "center",
      
       
       height: "50%",
       justifyContent: "center",
       alignItems: "center",
      
   },
   RightSideCart:{
       flexDirection: "row",
       flexDirection: 'row-reverse',
       backgroundColor: "red",
       height: "50%",
       width:"100%",
       justifyContent: "center",
       alignItems: "center"
   },
   cartBtn:{
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 100,
        backgroundColor: "#0ebeff",
        marginRight:10 ,
   },
   cartElementText:{
       marginRight: 10,
       marginTop: "2%",
       fontSize: 25,
   },
   cartTitle:{
       padding: 10,
   }
});
const styles3 = StyleSheet.create({
    btn:{
        padding: 10,
        alignItems: 'center',
        backgroundColor: "red",
      },
})
export default CartElement
