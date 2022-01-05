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
  } from 'react-native';
  
  import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';

import { withOrientation } from 'react-navigation';
import {CartProvider} from '../Cart/CartProvider';
import {cartContext} from "../Cart/CartProvider";

function Cards({id_product, product_name, price, description}) {
    const [modalVisible, setModalVisible] = useState(false);

    const {addToCart} = useContext(cartContext);

    

    const getCartElementTogether = ()=> {
      const cartElement = new Object();
      cartElement.id_product = id_product;
      cartElement.product_name = product_name;
      cartElement.price = price;
      cartElement.amount = 1;
      
      return getCartElementTogether;
     
    }

    return(
        
          <View style={[styles.card]}>
            <Text style={styles.fonts}>#{id_product}</Text>
            <View style={styles.line} ></View>
            <Text style={styles.fonts}>{product_name}</Text>


            <Modal style={styles.centeredView} animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(true)} product_name={product_name} price={price} description={description}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>{product_name}</Text>
                  <Text style={styles.modalText}>Q{price}</Text>
                  <Text style={styles.modalText}>{description}</Text>
                  <View style={{ flexDirection: "row" }}>

                    <Button color="#1E6738" onPress = {addToCart} title={' Add to cart '} style={{ flex: 1 }, { padding: 50 }} >

                    </Button>
                    <Button title={'Go Back'} style={{ flex: 1 }} onPress={() => setModalVisible(!modalVisible)}>

                    </Button>
                  </View>
                </View>
              </View>
            </Modal>

            <Button style={[styles.button, styles.buttonOpen]} title={'Details'} onPress={() => setModalVisible(true)}>

            </Button>
          </View>
        
    );
}
const styles = StyleSheet.create({
    card: {
        width: 175,
		minHeight: 150,
		backgroundColor: '#28282b',
		color: '#ecf0f1',
		
		
		borderRadius: 2,
    },

    line:{
        
			height: 5,
			marginTop: 10,
            backgroundColor: "#0ebeff",
            textAlign: "center"
    },
    fonts:{
      textAlign: "center",
			justifyContent: "center",
			color: "white",
      minHeight: 35,
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      
    },
    
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    buttonDelete: {
      
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
})

export default Cards
