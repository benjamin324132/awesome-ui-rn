/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './Screens/Home';
import NotesScreen from './Screens/Notes/NotesScreen';
import AddNote from './Screens/Notes/AddNote';
import EditNote from './Screens/Notes/EditNote';
import ChatScreen from './Screens/Chat/chatScreen';
import MoviesScreen from './Screens/Movies/moviesScreen';
import FurnituresScreen from './Screens/Furnitures/furnitureScreen';


export type RootStackParamList = {
  Home: undefined;
  NotesScreen: undefined;
  AddNote: undefined;
  EditNote: { id: string };
  ChatScreen: undefined;
  MoviesScreen: undefined;
  FurnituresScreen: undefined;
};


const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NotesScreen" component={NotesScreen} />
        <Stack.Screen name="AddNote" component={AddNote} />
        <Stack.Screen name="EditNote" component={EditNote} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="MoviesScreen" component={MoviesScreen} />
        <Stack.Screen name="FurnituresScreen" component={FurnituresScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
