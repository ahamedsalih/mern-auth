import React,{useState,useEffect} from 'react';
import { TextInput,Button,Snackbar } from 'react-native-paper';
import {View,Text,StatusBar,ToastAndroid,AsyncStorage,ActivityIndicator} from "react-native"


const checkPassword=({navigation,route})=>{
    const [oldpassword,setOldpassword]=useState("");
   
     
    const btnHandle=(userId)=>{
     console.log(userId)
      
        if(oldpassword===""){
            alert("please enter current password")
        }
        return fetch(`http://192.168.43.52:5000/change/${userId}`,{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({oldpassword})
        }).then(res=>res.json()).then(data=>{
            if(data.msg){
             
                navigation.navigate("new")
                alert("create new password")
               
            }

         else {
                alert(data.error)
            }

           
        
           
         
          
        }).catch(err=>{console.log(err)})
    }
    return(
        <View style={{flex:1}}>
        <StatusBar hidden/>
        <Text style={{textAlign:"center",top:"20%",letterSpacing:3,fontSize:27,fontWeight:"bold"}}>Enter your current password</Text>
       <View style={{flex:1,display:"flex",justifyContent:"center",alignItems:"center",alignItems:"center",bottom:"10%"}}>
     
       <TextInput
         label="old password"
         value={oldpassword}
       
         onChangeText={oldpassword => setOldpassword(oldpassword)}
         mode="outlined"
         style={{width:"90%",top:"2%"}}
        
       />
     <Button onPress={btnHandle} style={{top:10,top:"5%"}} mode="contained">
       Submit
     </Button>
   
   
   
 
       </View>
     
      
       </View>
    )
}

export default checkPassword;