import React from 'react';
import {View,Text,ActivityIndicator,StatusBar} from "react-native";
import { TextInput,Button } from 'react-native-paper';

export const Changepassword = () => {
    return (
        <View style={{flex:1}}>
        <StatusBar hidden/>
        
       <View style={{flex:1,display:"flex",justifyContent:"center",alignItems:"center",alignItems:"center",bottom:"10%"}}>
     
  

    <Button style={{top:10,top:"5%"}} mode="contained">change password</Button>
   
   
       </View>
     
      
       </View>
    )
}
