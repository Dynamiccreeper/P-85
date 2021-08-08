import * as React from 'react';
import { createSwitchNavigator,createAppContainer } from 'react-navigation';

import LoginScreen from"./screens/LoginScreen";
import LoadingScreen from "./screens/LoadingScreen";
import DashboredScreen from "./screens/DashboredScreen";

import * as firebase from 'firebase'
import {firebaseConfig} from './config'
if(!firebase.AppSwitchNavigator.length){
  firebase.initializeApp(firebaseConfig);
}else{
  firebase.app();

}
const AppSwitchNavigator=createSwitchNavigator({
  LoadingScreen:LoadingScreen,
  LoginScreen:LoginScreen,
  DashboredScreen:DashboredScreen
})

const AppNavigator = createAppContainer(AppSwitchNavigator)

export default function App() {
  
  return(
<AppNavigator/>
  )
}