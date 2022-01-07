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
function ShoppingCart({navigation}) {
    return (
        <ScrollView style = {styles.container}>
            <CartElement></CartElement>
            <CartElement></CartElement>
            <CartElement></CartElement>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#28282b',
  },
})
export default ShoppingCart
