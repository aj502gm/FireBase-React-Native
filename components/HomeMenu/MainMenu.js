import React, {useState, useEffect} from 'react'
import Cards from "./Cards";
import firestore from '@react-native-firebase/firestore';
import { Col, Row, Grid } from "react-native-easy-grid";
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

  

function MainMenu() {
    const [dataProduct, setDataProducts] = useState([]);
    let dataProductTemp = [];
    useEffect(()=>{
      try{
        async function fetchData(){
          try{
              const products = await firestore().collection('Products').get();
              products.forEach(value => dataProductTemp.push(value));
              setDataProducts(dataProductTemp.reverse());
          }catch(e){
            console.log(e);
          }
         
        }
        fetchData();
        
      }catch(e){
        console.log(e);
      }  
    },[]);
    useEffect(()=>{
      console.log("DATA:")
      console.log(dataProduct);
    },[dataProduct])
    return (
      <Grid>
        <Col style = {styles.back} size = {1}>
          <ScrollView>
            {
              dataProduct?.map((value,index) =>{
                if(index % 2 ===  0){
                  return <Row style = {styles.card_row}  ><Cards key = {value.data().id_product + value.data().product_name} id_product = {index+1} product_name = {value.data().product_name} price = {value.data().price}></Cards></Row>
                }
              })
            }
          </ScrollView>
        </Col>
        <Col style = {styles.back} size = {1}>
          <ScrollView>
            {
              dataProduct?.map((value,index) =>{
                if(index % 2 != 0){
                  return <Row style = {styles.card_row} ><Cards key = {value.data().id_product + value.data().product_name} id_product = {index+1} product_name = {value.data().product_name} price = {value.data().price}></Cards></Row>
                }
              })
            }
          </ScrollView>
        </Col>
        
      </Grid>
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


export default MainMenu
