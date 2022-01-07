import React, {useState, useEffect} from 'react'
import Cards from "./Cards";
import firestore from '@react-native-firebase/firestore';
import { Col, Row, Grid } from "react-native-easy-grid";
import { useNavigation } from '@react-navigation/core'
import { FlatGrid } from 'react-native-super-grid';
import auth from '@react-native-firebase/auth';

import {
    ScrollView,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput,
    Button,
    Alert
  } from 'react-native';
  
  import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';

  

function CardsArea() {
     
    const [dataProduct, setDataProducts] = useState([]);
    let dataProductTemp = [];

    useEffect(()=>{ //FETCH FIREBASE DATA
      try{
       
        async function fetchData(){
          try{
              const products = await firestore().collection('Products').get();
              products.forEach(value => dataProductTemp.push(value.data()));
             
              return dataProductTemp.sort((a,b) =>(a.id_product > b.id_product)?1:-1); //ORDER ASC
              
          }catch(err){
            console.log(err);
          }
         
        }
        fetchData().then((products) => {console.log(products);setDataProducts(products)});
       
      }catch(e){
        console.log(e);
      }  
    },[]);
    
    const hanldeSignOut = () => auth().signOut().then(()=> navigation.replace("LogIn"));

    return (
      
      
        <FlatGrid
        itemDimension={150}
        data={dataProduct} //IT DOESN´T RE RENDER WITH NEW DATA (DATA CONNECTION WORKS!)
        style={styles2.gridView}
        // staticDimension={300}
        // fixed
        spacing={5}
        renderItem={({item} ) => (
          
  
              <Cards style = {styles2.itemName} id_product = {item.id_product} product_name = {item.product_name} price = {item.price} description = {item.description}>
            
              </Cards>
          
          //
        )}
      />
     
     
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
    }
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

export default CardsArea
