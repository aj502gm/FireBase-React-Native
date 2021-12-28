import React, {useState} from 'react'
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

  

function Cards({id_product, product_name, price}) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style = {styles.card}>
          <Text style = {styles.fonts}>{id_product}</Text>
          <View style = {styles.line} ></View>
          <Text style = {styles.fonts}>{product_name}</Text>
            

          <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(true)}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Hello World!</Text>
                <Button title = {'Close Modal'} style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </Button>
              </View>
            </View>
          </Modal>

          <Button style={[styles.button, styles.buttonOpen]} title = {'Details'}  onPress={() => setModalVisible(true)}>
            
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
		
		padding: 0,
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
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
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
