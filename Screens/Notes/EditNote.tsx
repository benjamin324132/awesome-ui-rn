import {NavigationProp, RouteProp} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
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
  ToastAndroid,
} from 'react-native';
import {RootStackParamList} from '../../App';

interface RouterProps
  extends NativeStackScreenProps<RootStackParamList, 'EditNote'> {
  // other props ...
}

const EditNote: React.FC<RouterProps> = ({route, navigation}) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const {id} = route.params;


  useEffect(() => {
    getNote();
  }, []);


  const getNote = async () => {
    try {
      const {data} = await axios.get(
        `https://ade-server.glitch.me/api/v1/posts/${id}`,
      );
      setTitle(data.title);
      setBody(data.body);
    } catch (err) {}
  };

  const onSaveNote = async () => {
    try {
      const {data} = await axios.put(
        `https://ade-server.glitch.me/api/v1/posts/${id}`,
        {
          title,
          body,
        },
      );
      ToastAndroid.show('Note Updated', 4);
      navigation.goBack()
    } catch (err) {
      console.log(err);
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
          <Text style={{color: 'white', fontSize: 16}}>Update</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

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

export default EditNote;
