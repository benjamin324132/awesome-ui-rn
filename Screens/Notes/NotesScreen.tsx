import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {Note} from '../../types/note';
import axios from 'axios';
import {NavigationProp} from '@react-navigation/native';
import { verticalScale } from '../../Utils/scaling';
import NoteCard from './Components/NoteCard';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const NotesScreen: React.FC<RouterProps> = ({navigation}) => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    try {
      const {data} = await axios.get(
        'https://ade-server.glitch.me/api/v1/posts',
      );
      setNotes(data);
    } catch (err) {}
  };

  const deleteNote = async (id: string) => {
    try {
      const {data} = await axios.delete(
        `https://ade-server.glitch.me/api/v1/posts/${id}`,
      );
      getNotes();
    } catch (err) {}
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{width: '100%'}}
        data={notes}
        renderItem={({item}) => (
          <NoteCard note={item} deleteNote={deleteNote} goToEdit={() => navigation.navigate("EditNote", {id: item._id })} />
        )}
        ListFooterComponent={() => <View style={{marginBottom: verticalScale(60)}} />}
      />
      <TouchableOpacity
        style={styles.float}
        onPress={() => navigation.navigate('AddNote')}>
        <Text style={styles.addText}>+</Text>
      </TouchableOpacity>
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
  card: {
    width: '100%',
    padding: 12,
    backgroundColor: '#ededed',
    borderRadius: 12,
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  float: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    backgroundColor: '#7B61FF',
    height: 70,
    width: 70,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    fontSize: 30,
    color: 'white',
  },
});

export default NotesScreen;
