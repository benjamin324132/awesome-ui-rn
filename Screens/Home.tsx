import {NavigationProp} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import FlatButton from '../Components/button';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const HomeScreen: React.FC<RouterProps> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatButton
        onPress={() => navigation.navigate('NotesScreen')}
        text="Notes"
      />
      <FlatButton
        onPress={() => navigation.navigate('ChatScreen')}
        text="Chat"
      />
      <FlatButton
        onPress={() => navigation.navigate('MoviesScreen')}
        text="Movies"
      />
      <FlatButton
        onPress={() => navigation.navigate('FurnituresScreen')}
        text="Furnitures"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default HomeScreen;
