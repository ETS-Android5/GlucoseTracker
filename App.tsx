// Get all the necessary components from React
import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import * as firebase from "firebase";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// Main-first templates
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import MainTemplateScreen from './src/screens/templates/MainTemplateScreen';

// Secondary-logged in screens
import ExerciseScreen from './src/screens/ExerciseScreen';
import GlucoseScreen from './src/screens/GlucoseScreen';
import AddGlucoseScreen from './src/screens/AddGlucoseScreen';
import NutritionScreen from './src/screens/NutritionScreen';
import SettingsScreen from './src/screens/SettingsScreen';


const MainNavigator = createStackNavigator({
  Login: { screen: LoginScreen },
  SignUp: { screen: SignUpScreen },
  MainTemplate: { screen: MainTemplateScreen },
  Exercise: { screen: ExerciseScreen },
  Glucose: { screen: GlucoseScreen },
  AddGlucose: { screen: AddGlucoseScreen },
  Nutrition: { screen: NutritionScreen },
  Settings: { screen: SettingsScreen },
});


var config = {
    databaseURL: "<database-url>",
    projectId: "<project-id>",
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}


// Tired of seeing those pesky warnings in the
// emulator? This disables them. Remove if needed
console.disableYellowBox = true;
// Stop Android Firebase timer warning from displaying
console.ignoredYellowBox = ['Setting a timer'];

const App = createAppContainer(MainNavigator);

export default App;
