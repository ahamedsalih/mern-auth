import React,{useState} from 'react';
import { TextInput,Button } from 'react-native-paper';
import {View,Text,StatusBar,ToastAndroid,ActivityIndicator} from "react-native"

const Signup = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // const inputHandle=()=>{
  //     if(name===""){
  //       showToastWithGravity()
  //     }
  //     if(text===""){
  //      showToastWithGravity()
  //     }
  //     if(password===""){
  //      showToastWithGravity()
  //     }
  //     else{
  //       alert(" Signup success")
  //     }
  // }


  // const showToastWithGravity = () => {
  //   ToastAndroid.showWithGravity(
  //     "Please Fill all the Fields",
  //     ToastAndroid.SHORT,
  //     ToastAndroid.BOTTOM
  //   );
  // };


  const btnHandle=()=>{
    setLoading(true);
      return fetch("http://192.168.43.52:5000/signup",{
        method:"post",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name,email,password
        })
      }).then(res=>res.json()).catch(err=>{
        console.log(err)
      })
      .then(data=>{
        setLoading(false)
        if(data.error){
          alert(data.error)
        }
        else{
          alert(data.message)
          navigation.push("login")
        }
      }).catch(err=>{
        console.log(err)
      })
  }

  return (
     <View style={{flex:1}}>
     <StatusBar hidden/>
     <Text style={{textAlign:"center",top:"18%",letterSpacing:3,fontSize:27,fontWeight:"bold"}}>Signup</Text>
    <View style={{flex:1,display:"flex",justifyContent:"center",alignItems:"center",alignItems:"center",bottom:"10%"}}>
  
    <TextInput
      label="Name"
      value={name}
      onChangeText={name => setName(name)}
      mode="outlined" style={{width:"90%"}}
   
    />
    <TextInput
      label="Email"
      value={email}
      onChangeText={email => setEmail(email)}
      mode="outlined" style={{width:"90%",top:"1%"}}
   
    />
    <TextInput
      label="Password"
      value={password}
    
      onChangeText={password => setPassword(password)}
      mode="outlined"
      style={{width:"90%",top:"2%"}}
     
    />

  {loading?<ActivityIndicator  style={{top:10,top:"5%"}} size="large" color="#0000ff" />:<Button onPress={()=>btnHandle()} style={{top:10,top:"5%"}} mode="contained">
    Register
  </Button>}




  <Text style={{top:"10%"}} onPress={()=>navigation.navigate("login")}>Already have an account ? Login</Text>
  
   
    </View>
   
    </View>
  );
};

export default Signup;