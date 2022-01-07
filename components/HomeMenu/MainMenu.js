import React, {useState, useEffect} from 'react'
import Cards from "../Cart/Cards";
import firestore from '@react-native-firebase/firestore';
import { Col, Row, Grid } from "react-native-easy-grid";
import { useNavigation } from '@react-navigation/core'
import { FlatGrid } from 'react-native-super-grid';
import CardsArea from '../Cart/CardsArea';
import auth from '@react-native-firebase/auth';

import {
    ScrollView,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput,
    Button,
    Alert,
    TouchableOpacity 
  } from 'react-native';
  
  import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';


function MainMenu({navigation}) {
  const hanldeSignOut = () =>{
    try{
      auth().signOut().then(()=> navigation.replace("LogIn"));
    }catch(err){
      console.log(err);
    }
  }  

   return(
     <>
     <CardsArea></CardsArea>
     <View>
        <TouchableOpacity style = {styles.btn2} onPress = {()=>navigation.replace("ShoppingCart")}>
          <Text style = {{color: "white"}}>Go to cart!</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.btn} onPress = {hanldeSignOut}>
          <Text style = {{color: "white"}}>Log Out</Text>
        </TouchableOpacity>
     </View>
     </>
   )
   
}
const styles = StyleSheet.create({
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

const styles2 = StyleSheet.create({
    gridView: {
      marginTop: 10,
      flex: 1,
    },
    itemContainer: {
      justifyContent: 'flex-end',
      borderRadius: 5,
      padding: 10,
      height: 150,
    },
    itemName: {
      fontSize: 16,
      color: '#fff',
      fontWeight: '600',
    },
    itemCode: {
      fontWeight: '600',
      fontSize: 12,
      color: '#fff',
    },
  });

export default MainMenu;

/*
https://www.npmjs.com/package/react-native-super-grid
*/