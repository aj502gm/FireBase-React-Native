

 import React, {useState} from 'react';

 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
 
 
const LogIn = ({navigation}) =>{
  const [userName, setUserName] = useState(null);
  const [userPass, setUserPass] = useState(null);

  const checkData = () => {
    if(userName != 'aj502gm' || userPass != 'holamundo'){
      Alert.alert("Usuario o contraseña incorrecta", "Revise sus datos");
      return;
    };
    navigation.navigate("MainMenu");
  }
  return (
    <View style = {styles.container}>
        <TextInput  placeholderTextColor={'#0ebeff'} style = {styles.input} value = {userName} onChangeText = {(e) => setUserName(e)} placeholder={'Hello Folk'} />
        <TextInput  placeholderTextColor={'#0ebeff'} style = {styles.input} value = {userPass} onChangeText = {(e) => setUserPass(e)} placeholder={'Is that really you?'} />
        <Button title = {"Let's go!"} style = {styles.inputButton} onPress = {() => checkData() }/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#28282b',
      
    },
    inputButton:{
      backgroundColor: "#0ebeff",
    },
    input: {
      width: 200,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderBottomColor: "#0ebeff",
      borderRightColor: "#0ebeff",
      borderLeftColor: "#0ebeff",
      borderTopColor: "#0ebeff",
      marginBottom: 10,
      color: "white",
      placeholderTextColor:"#0ebeff",
    },
  });

export default LogIn;