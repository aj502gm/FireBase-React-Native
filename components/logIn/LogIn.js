

 import React, {useState, useContext} from 'react';

 import { NavigationContainer } from '@react-navigation/native';
 import auth from '@react-native-firebase/auth';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';

 import {authContext} from "../Firebase/AuthProvider";
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
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");
//ENVOLVER EL APP EN EL PROVIDER
  const {login} = useContext(authContext);

  const checkData = () =>{
    if(userName != 'aj502gm' || userPass != "holamundo"){
      Alert.alert("Error", "Datos incorrectos");
      return;
    }
    navigation.navigate("MainMenu");
  }
  return (
    <View style = {styles.container}>
        <TextInput  placeholderTextColor={'#0ebeff'} style = {styles.input} value = {userName} onChangeText = {(e) => setUserName(e)} placeholder={'Hello Folk'} />
        <TextInput  placeholderTextColor={'#0ebeff'} style = {styles.input} value = {userPass} onChangeText = {(e) => setUserPass(e)} placeholder={'Is that really you?'} />
        <Button title = {"Let's go!"} style = {styles.inputButton} onPress = {() => {if(login(userName,userPass)) navigation.navigate("MainMenu")} }/>
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
      
    },
  });

export default LogIn;