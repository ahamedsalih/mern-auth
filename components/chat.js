import React from 'react';
import {View,Text,ActivityIndicator,StatusBar,Image,ScrollView} from "react-native";
import { TextInput,Button } from 'react-native-paper';

export const Chat = () => {
    return (
       
       <View style={{padding:10}}>
          {chats.map((data,index)=>{
              return <View key={index} style={{width:"100%",height:80,backgroundColor:"lightgrey"
              ,flexDirection:"row",display:"flex",justifyContent:"space-around",top:0,elevation:10,marginTop:10}}>
           <Image style={{width:70,height:70,borderRadius:70,top:7,left:10,position:"absolute"}}
            source={{uri:data.image}} />
           <Text style={{top:24,fontSize:22,right:45,letterSpacing:2,left:10}}>{data.name}</Text> 
            </View>
          })}
         
            </View>
            
    )
}

const chats=[{image:"https://www.mantruckandbus.com/fileadmin/media/bilder/020/mit-18-monaten-planungszeit-stefan-sahlmann-header.jpg",name:"satya"},{image:"https://sa1s3optim.patientpop.com/assets/images/provider/photos/1888657.jpg",name:"vimal"},
{image:"https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg",name:"prakash"}]
