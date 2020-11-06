import React,{useState} from 'react';
import {View,Text,ActivityIndicator,StatusBar} from "react-native";
import { TextInput,Button } from 'react-native-paper';

export const forgotPassword = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
  

  const btnHandle=(e)=>{
      setLoading(true)
      e.preventDefault();
      if(email===""){
     alert("please enter email")
      }
      else{
          return fetch("http://192.168.43.52:5000/forgotpassword",{
              method:"post",
              headers:{
                  "Content-Type":"application/json"
              },
              body:JSON.stringify({email})
            }).then(res=>res.json())
            .then(data=>{
               
                if(data.error){
                    setLoading(false)
                    alert("email doesnot exist")
                }
               else if(data.msg){
                   setLoading(false)
                   navigation.navigate("otp", {email:email})
                   alert("otp sent success")
               }
            }).catch(err=>{
                console.log(err.data)
            })
      }
  }

    return (
        <View style={{flex:1}}>
        <StatusBar hidden/>
        <Text style={{textAlign:"center",top:"20%",letterSpacing:3,fontSize:27,fontWeight:"bold"}}>Enter Your Email</Text>
       <View style={{flex:1,display:"flex",justifyContent:"center",alignItems:"center",alignItems:"center",bottom:"10%"}}>
     
       <TextInput
         label="Email"
         value={email}
         onChangeText={email => setEmail(email)}
         mode="outlined" style={{width:"90%",bottom:"2%"}}
      
       />
    {loading?<ActivityIndicator  style={{top:10,top:"3%"}}  size="large" color="#0000ff"/>: <Button onPress={btnHandle} style={{top:10,top:"3%"}} mode="contained">
       Get OTP
     </Button>} 
   
    
    </View>
     </View>
    )
}
