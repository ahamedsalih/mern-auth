import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,CardStyleInterpolators } from '@react-navigation/stack';
import {fromLeft} from "react-navigation-transitions";
import Login from "./components/login";
import Signup from "./components/signup";
import Home from "./components/home";
import {forgotPassword} from "./components/forgotPassword";
import Otp from "./components/otp";
import newPassword from "./components/newPassword";
import checkPassword from "./components/checkpassword";
import { Changepassword } from "./components/changepassword";

const Stack = createStackNavigator();

const fadeConfig = ({ current }) => {
    return {
        cardStyle: {
            backgroundColor: 'transparent',
            opacity: 1, 
        },
    }
};




class App extends React.Component{
    render(){
    
        return(
            <NavigationContainer>
            <Stack.Navigator initialRouteName="login" headerMode="none" mode="card">
            <Stack.Screen name="login" component={Login} options={{ cardStyleInterpolator: fadeConfig }}  />
            <Stack.Screen
              name="signup"
              component={Signup}
              options={{ cardStyleInterpolator: fadeConfig }}
  
            />
            <Stack.Screen
              name="home"
              component={Home}
              options={{ cardStyleInterpolator: fadeConfig }}

            />
            <Stack.Screen
              name="forgotpassword"
              component={forgotPassword}
              options={{ cardStyleInterpolator: fadeConfig }}

            />
            <Stack.Screen
              name="otp"
              component={Otp}
              options={{ cardStyleInterpolator: fadeConfig }}

            />
            <Stack.Screen
              name="new"
              component={newPassword}
              options={{ cardStyleInterpolator: fadeConfig }}

            />
            <Stack.Screen
              name="changepassword"
              component={Changepassword}
              options={{ cardStyleInterpolator: fadeConfig }}

            />
          </Stack.Navigator>
          </NavigationContainer>
        )
    }
}


export default App;

