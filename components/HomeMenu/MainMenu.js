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

  

function MainMenu({navigation}) {
    
    const [dataProduct, setDataProducts] = useState([]);
    let dataProductTemp = [];

    useEffect(()=>{ //FETCH FIREBASE DATA
      try{
        //Alert.alert('ALGOO')
        async function fetchData(){
          try{
              const products = await firestore().collection('Products').get();
              products.forEach(value => dataProductTemp.push(value));
              
              return dataProductTemp;
              
          }catch(e){
            console.log("ERROR!");
          }
         
        }
        fetchData().then((products) => {console.log(products);setDataProducts(products)});
       
      }catch(e){
        console.log(e);
      }  
    },[]);
    
    useEffect(()=>{
     //console.log(dataProduct);
    }, [dataProduct])

    const hanldeSignOut = () =>{
      auth().signOut().then(()=> navigation.replace("LogIn"));
    }

    return (
      
      
        <FlatGrid
        itemDimension={130}
        data={dataProduct} //IT DOESN´T RE RENDER WITH NEW DATA (DATA CONNECTION WORKS!)
        style={styles2.gridView}
        // staticDimension={300}
        // fixed
        spacing={10}
        renderItem={({item} ) => (
          
          <Cards id_product = {item.id_product} product_name = {item.product_name} price = {item.price} description = {item.price}></Cards>
          //
        )}
      />
     
     
      // <Grid>
      //   <Button title = {'salir'} onPress = {hanldeSignOut}></Button>
      //   <Col style = {styles.back} size = {1}>
      //     <ScrollView>
      //       {
      //        dataProduct.map((value,index) =>{
      //          if(index){
                
      //             return <Row key = {index} style = {styles.card_row}  ><Cards key = {value.data().id_product + value.data().product_name} id_product = {index+1} product_name = {value.data().product_name} price = {value.data().price} description = {value.data().description}></Cards></Row>
      //           }
      //         })              
      //       }
      //     </ScrollView>
      //   </Col>
      //    <Col style = {styles.back} size = {1}>
      //     <ScrollView>
      //       {
      //         dataProduct.map((value,index) =>{
      //           if(index %2 != 0){
      //             return <Row key = {index}  style = {styles.card_row}  ><Cards key = {value.data().id_product + value.data().product_name} id_product = {index+1} product_name = {value.data().product_name} price = {value.data().price} description = {value.data().description}></Cards></Row>
      //           }
      //         })
              
      //       }
      //     </ScrollView>
      //   </Col>
        
        
      // </Grid>
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

export default MainMenu;

/*
https://www.npmjs.com/package/react-native-super-grid



*/ 