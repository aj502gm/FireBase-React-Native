/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from './components/logIn/LogIn';
import MainMenu from './components/HomeMenu/MainMenu';
import {AuthProvider} from "./components/Firebase/AuthProvider";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
  Alert
} from 'react-native';

const Stack = createNativeStackNavigator();


const App=  () => {
  
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LogIn" component={LogIn} options={{ title: 'Welcome Back' }} />
          <Stack.Screen name="MainMenu" component={MainMenu}  options={{ title: 'Home' }}/>
         
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  ); 
};

//<Stack.Screen name="MainMenu" component={MainMenu}  options={{ title: 'Home' }}/>
        //PANTALLA DE DETALLES PARA LOS PRODUCTOS PENDIENTES DE AGREGAR


//INVESTIGACION DE GRID PARA MOSTRAR ELEMENTOS
        //ES NECESARIO INSTALAR LA DEPENDENCIA GRID LA CUAL PERMITIRÁ CONFIGURAR LAMATRIZ DE DESPLIEGUE
        //SIN NECESIDAD DE CONFIGURAR POR MEDIO DE CSS
/*

<NavigationContainer>
      <Stack.Navigator initialRouteName = "LogInHome">
        <Stack.Screen name = "LogInHome" component = {LogIn}></Stack.Screen>
      </Stack.Navigator>
</NavigationContainer>

*/
export default App;
