import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const CartElement = () => {
    return (
        <View style = {styles.container}>
            <View style = {styles.element}>
                <View style = {styles.leftSideCart}>
                    <Text>Cereza</Text>
                    
                    <Text>Q15</Text>
                </View>
                <View style = {styles.RightSideCart}> 
                    <TouchableOpacity style = {styles.cartBtn}>
                        <Text style = {{color: "white"}}>+</Text>
                    </TouchableOpacity>
                    <Text>5</Text>
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
   },
   RightSideCart:{
       flexDirection: "row",
       flexDirection: 'row-reverse',
       backgroundColor: "red",
       height: "50%",
       width:"100%",
   },
   cartBtn:{
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: "#0ebeff"
   }
})
export default CartElement
