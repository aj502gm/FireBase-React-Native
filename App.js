/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from './components/logIn/LogIn';
import MainMenu from './components/HomeMenu/MainMenu';
import {AuthProvider} from "./components/Firebase/AuthProvider";
import firestore from '@react-native-firebase/firestore';
import {CartProvider} from './components/Cart/CartProvider';
import ShoppingCart from './components/Cart/ShoppingCart';
const data = require('./mockData/MOCK_DATA.json'); // BACK


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
  Alert
} from 'react-native';


const Stack = createNativeStackNavigator();


const App=  () => {
  
  return (
    <AuthProvider>
      <CartProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions = {{headerShown: false}} >
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="MainMenu" component={MainMenu}  />
            <Stack.Screen name="ShoppingCart" component={ShoppingCart}  />
          </Stack.Navigator>
        </NavigationContainer>
      </CartProvider>
    </AuthProvider>
  ); 
};
// const addData = async () => {
//   try{
//     data.forEach(product => {
//       firestore().collection('Products').add(product);
//     });
//     console.log(data);
//   }catch(e){
//     console.log(e);
//   }
// }

// addData(); <---- THIS FUNCTION ALLOW TO USE INSERT MOCK DATA INTO THE DATABASE. DO NOT USE BUT THE FIRST TIME




export default App;
