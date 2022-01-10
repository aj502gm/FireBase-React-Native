import React, {useState, useEffect,useContext} from 'react'
import {
   
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput,
    Button,
    Alert,
    Modal,
    ScrollView,
    TouchableOpacity,
  } from 'react-native';
  
  import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';

import { withOrientation } from 'react-navigation';
import {CartProvider} from './CartProvider';
import {cartContext} from "./CartProvider";
import CartElement from './CartElement';
import auth from '@react-native-firebase/auth';

function ShoppingCart({navigation}) {
    const {cartList} = useContext(cartContext);
    const handleSignOut = () =>{
      try{
        auth().signOut().then(()=> navigation.replace("LogIn"));
      }catch(err){
        console.log(err);
      }
    }  
    return (
      <>
        <ScrollView style = {styles.container}>
          {
            cartList?.map(value =>  <CartElement title = {value.product_name} amount = {value.amount} price = {value.price}></CartElement>)
          }
          
        </ScrollView>
        <View>
        <TouchableOpacity style = {styles3.btn2} onPress = {()=>navigation.replace("MainMenu")}>
          <Text style = {{color: "white"}}>Go to Menu!</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles3.btn} onPress = {()=> handleSignOut()}>
          <Text style = {{color: "white"}}>Log Out</Text>
        </TouchableOpacity>
      </View>
      </>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#28282b',
  },
});
const styles2 = StyleSheet.create({
  container: {
    height: 1200,
    backgroundColor: '#111',
    width: 500,
    
},
input: {
  width: 200,
  height: 44,
  padding: 10,
  borderWidth: 1,
  borderColor: 'black',
  marginBottom: 10,
},
back:{
  backgroundColor: '#111',
 
},
card_row:{
  marginBottom:20,
},
btn:{
  padding: 10,
  alignItems: 'center',
  backgroundColor: "red",
},
btn2:{
  padding: 10,
  alignItems: 'center',
  backgroundColor: "#1E6738",
},

});

const styles3 = StyleSheet.create({
  btn:{
    padding: 10,
    alignItems: 'center',
    backgroundColor: "red",
  },
  btn2:{
    padding: 10,
    alignItems: 'center',
    backgroundColor: "#1E6738",
  },

})
export default ShoppingCart
