import React from 'react'
import {
   
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
import { withOrientation } from 'react-navigation';

  

function Cards({id_product, product_name, price}) {
    return (
        <View style = {styles.card}>
				<Text style = {styles.fonts}>{id_product}</Text>
				<View style = {styles.line} ></View>
				<Text style = {styles.fonts}>{product_name}</Text>
                <Button title = {"Surprise"} style = {styles.inputButton} onPress = {() => Alert.alert('fjkdsjf', 'fdsfasd')}/>
		</View>
    )
}
const styles = StyleSheet.create({
    card: {
        width: 175,
		height: 100,
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
    }
})

export default Cards
