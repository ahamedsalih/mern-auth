import React, { useState } from "react";
import { TextInput,Button,Snackbar } from 'react-native-paper';
import {View,Text,StatusBar,ToastAndroid,AsyncStorage,ActivityIndicator} from "react-native"


const Otp=({route,navigation})=>{
    const {email}=route.params;
    const [otp,setOtp]=useState("");
    const [loading,setLoading]=useState(false);

    const btnHandle=()=>{
        setLoading(true)
        if(otp===""){
            alert("please enter OTP")
        }
        return fetch("http://192.168.43.52:5000/otp",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({otp,email})
          }).then(res=>res.json()).catch(err=>{console.log(err)})
          .then(data=>{
             setLoading(false)
              if(data.msg){
                  navigation.push("new",{otp:otp,email:email})
                  alert(" otp success")
              } 
                
          }).catch(err=>{console.log(err)})
    }
    return(
        <View style={{flex:1}}>
        <StatusBar hidden/>
        <Text style={{textAlign:"center",top:"20%",letterSpacing:3,fontSize:27,fontWeight:"bold"}}>Enter otp</Text>
       <View style={{flex:1,display:"flex",justifyContent:"center",alignItems:"center",alignItems:"center",bottom:"10%"}}>
     
  
       <TextInput
         label="OTP"
         value={otp}
       
         onChangeText={otp=> setOtp(otp)}
         mode="outlined"
         style={{width:"90%",top:"2%"}}
        
       />
        {loading?<ActivityIndicator  style={{top:10,top:"5%"}}  size="large" color="#0000ff"/>:<Button style={{top:10,top:"5%"}} mode="contained" onPress={btnHandle}>submit</Button>}
   
   
       </View>
     
      
       </View>
    )
}


export default Otp;