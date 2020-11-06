import React,{useState,useEffect} from 'react';
import { TextInput,Button,Snackbar } from 'react-native-paper';
import {View,Text,StatusBar,ToastAndroid,AsyncStorage,ActivityIndicator} from "react-native"

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);




useEffect(()=>{
getUser()
},[])
 


  
 const getUser=async()=>{
        
    const token1=await AsyncStorage.getItem("jwt");
    if(token1){
      navigation.navigate("home")
    }
    else{
      navigation.navigate("login")

    }
   
  } 


  // const setUser=async()=>{
    
  //      alert("logged in success");
  //       await AsyncStorage.setItem("token","1");
  //       navigation.push("home");
  //   }

  // const showToastWithGravity = () => {
  //   ToastAndroid.showWithGravity(
  //     "Please Fill all the Fields",
  //     ToastAndroid.SHORT,
  //     ToastAndroid.BOTTOM
  //   );
  // };


 

  const btnHandle=()=>{
    setLoading(true)
    return fetch("http://192.168.43.52:5000/signin",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,password
      })
    }).then(res=>res.json()).catch(err=>console.log(err))
    .then(async(data)=>{
      setLoading(false)
      if(data.error){
        alert(data.error)
      }
      else{
        alert("logedin success")
        await AsyncStorage.setItem("jwt",data.token)
        navigation.push("home")
      }
    })
  }

  return (
     <View style={{flex:1}}>
     <StatusBar hidden/>
     <Text style={{textAlign:"center",top:"20%",letterSpacing:3,fontSize:27,fontWeight:"bold"}}>Login</Text>
    <View style={{flex:1,display:"flex",justifyContent:"center",alignItems:"center",alignItems:"center",bottom:"10%"}}>
  
    <TextInput
      label="Email"
      value={email}
      onChangeText={email => setEmail(email)}
      mode="outlined" style={{width:"90%"}}
   
    />
    <TextInput
      label="Password"
      value={password}
    
      onChangeText={password => setPassword(password)}
      mode="outlined"
      style={{width:"90%",top:"2%"}}
     
    />
  {loading?  <ActivityIndicator  style={{top:10,top:"5%"}}  size="large" color="#0000ff"/>:<Button onPress={btnHandle} style={{top:10,top:"5%"}} mode="contained">
    Login in
  </Button>} 



  <Text style={{top:"10%"}} onPress={()=>navigation.push("signup")}>Don't have an account ? Signup</Text>


  <Text onPress={()=>navigation.push("forgotpassword")} style={{top:"13%",letterSpacing:1}}>Forgot Password? Click me</Text>
   
    </View>
  
   
    </View>
  );
};

export default Login;