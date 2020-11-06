import React,{useState,useEffect} from 'react';
import { TextInput,Button,Snackbar } from 'react-native-paper';
import {View,Text,StatusBar,ToastAndroid,AsyncStorage,ActivityIndicator} from "react-native"

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Chat } from './chat';
import { Contacts } from './contacts';
import { Feather } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();

const Home=({navigation})=> {
  return (
      <>
      <View style={{width:"100%",height:60,backgroundColor:"grey",display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
      <Feather name="settings" size={24} color="white" style={{top:18,left:-48}} onPress={()=>navigation.navigate("changepassword")}/>
      <Text style={{top:10,right:70,textAlign:"center",color:"white",fontSize:24,letterSpacing:2}}>Mobilio</Text>
      </View>
    <Tab.Navigator  initialRouteName="chat" tabBarOptions={ { activeTintColor: 'black',
    inactiveTintColor: 'lightgrey',indicatorStyle:{backgroundColor:"black",height:3},labelStyle:{height:30}}}>
      <Tab.Screen name="chat" component={Chat} />
      <Tab.Screen name="contacts" component={Contacts} />
    </Tab.Navigator>
    </>
  );
}




export default Home;