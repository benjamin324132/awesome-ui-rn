import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ToastAndroid
} from 'react-native';


function AddNote(): JSX.Element {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onSaveNote = async () => {
    try {
      const {data} = await axios.post(
        'https://ade-server.glitch.me/api/v1/posts',
        {
          title,
          body,
          image:
            'https://cdn.dribbble.com/userupload/2645324/file/original-3a6aaf3d0f9d96c648e00f53fcba9611.jpg',
        },
      );
      setTitle("")
      setBody("")
      ToastAndroid.show("Note Saved", 4)
    } catch (err) {
        console.log(err)
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={text => setTitle(text)}
        placeholder="Title"
      />
      <TextInput
        style={[styles.input, {marginTop: 10, textAlignVertical: 'top'}]}
        multiline={true}
        numberOfLines={6}
        value={body}
        onChangeText={text => setBody(text)}
        placeholder="Body"
      />
      <View style={{width: '100%'}}>
        <TouchableOpacity style={styles.btn} onPress={onSaveNote}>
          <Text style={{color: 'white', fontSize: 16}}>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#ededed',
    width: '100%',
    borderRadius: 12,
    padding: 16,
    fontSize: 18,
  },
  btn: {
    marginTop: 20,
    width: '100%',
    borderRadius: 12,
    backgroundColor: '#7B61FF',
    padding: 12,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddNote;
