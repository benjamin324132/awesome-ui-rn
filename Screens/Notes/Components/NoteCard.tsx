//import { Edit2, Trash} from 'iconsax-react-native';
import React from 'react';
import {
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import { Note } from '../../../types/note';
import { theme } from '../../../Utils/theme';


interface Props {
  note: Note;
  deleteNote: (id: string) => void;
  goToEdit: () => void;
}

const NoteCard: React.FC<Props> = ({note, deleteNote, goToEdit}) => {
  return (
    <View>
      <View style={styles.card}>
        <View style={{ flex: 1}}>
          <Text style={styles.title}>{note.title}</Text>
          <Text>{note.body}</Text>
        </View>
        <TouchableOpacity style={styles.iconWrapper} onPress={goToEdit}>
           {/*<Edit2 size="22" color="#FF8A65"/>*/}
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrapper} onPress={() => deleteNote(note._id)}>
        {/*<Trash size="22" color="#FF8A65"/>*/}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    padding: 12,
    backgroundColor: '#ededed',
    borderRadius: 12,
    marginBottom: 15,
    flexDirection: 'row'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  iconWrapper:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.m
  }
});

export default NoteCard;
