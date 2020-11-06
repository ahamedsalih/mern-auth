import React, { useState } from "react";
import { TextInput,Button,Snackbar } from 'react-native-paper';
import {View,Text,StatusBar,ToastAndroid,AsyncStorage,ActivityIndicator} from "react-native"


const newPassword=({route,navigation})=>{
    const [newpassword,setNewpassord]=useState("");
    const {email}=route.params;


    const btnHandle=()=>{
        if(newpassword===""){
            alert("please enter the new password")
        }

        return fetch("http://192.168.43.52:5000/newpassword",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email,newpassword})
        }).then(user=>{
            if(user.error){
                alert(user.error)
            }
            alert("successfully updated");
            navigation.navigate("home")
        })
    }
    return(
        <View style={{flex:1}}>
        <StatusBar hidden/>
        <Text style={{textAlign:"center",top:"20%",letterSpacing:3,fontSize:27,fontWeight:"bold"}}>Create new password</Text>
       <View style={{flex:1,display:"flex",justifyContent:"center",alignItems:"center",alignItems:"center",bottom:"10%"}}>
     
  
       <TextInput
         label="create new password"
         value={newpassword}
       
         onChangeText={newpassword=> setNewpassord(newpassword)}
         mode="outlined"
         style={{width:"90%",top:"2%"}}
        
       />
   <Button style={{top:10,top:"5%"}} mode="contained" onPress={btnHandle}>submit</Button>
   
       </View>
     
      
       </View>
    )
}


export default newPassword;