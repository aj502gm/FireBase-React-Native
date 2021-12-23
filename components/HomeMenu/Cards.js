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

  

function Cards() {
    return (
        <View style = {styles.card}>
				<Text style = {styles.fonts}>Titulo 1</Text>
				<View style = {styles.line} ></View>
				<Text style = {styles.fonts}>REACT NATIVE</Text>
                <Button title = {"Surprise"} style = {styles.inputButton} onPress = {() => Alert.alert('fjkdsjf', 'fdsfasd')}/>

		</View>
    )
}
const styles = StyleSheet.create({
    card: {
        width: 200,
		height: 100,
		backgroundColor: '#28282b',
		color: '#ecf0f1',
		
		padding: 10,
		borderRadius: 2,
		marginTop: 5,
        marginBottom: 5,
        marginLeft: 75,
    },
    line:{
        width: 320,
			height: 5,
			marginTop: 10,
            backgroundColor: "#0ebeff",
            textAlign: "center"
    },
    fonts:{
       
			
			color: "white",
    }
})

export default Cards
