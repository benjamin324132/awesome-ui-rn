import {NavigationProp} from '@react-navigation/native';
import {useEffect, useRef, useState} from 'react';
import socketIOClient from 'socket.io-client';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {theme} from '../../Utils/theme';
import FlatButton from '../../Components/button';
import {scale} from '../../Utils/scaling';
import React from 'react';

const ChatScreen: React.FC = () => {
  const navigation = useNavigation();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<any[]>([]);
  const socketRef: any = useRef();

  useEffect(() => {
    socketRef.current = socketIOClient('https://socket-chat-server.glitch.me/');

    socketRef.current.on('message', (message: any) => {
      const incomingMessage = {
        ...message,
        who: message.sender === socketRef.current.id ? 'me' : 'other',
      };
      setMessages(messages => [...messages, incomingMessage]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const sendMessage = () => {
    socketRef.current.emit('send:message', {
      message: message,
      sender: socketRef.current.id,
    });
    setMessage('');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.messagesContainer}>
        <FlatList
          style={{width: '100%'}}
          data={messages}
          renderItem={({item}) => {
            const sender =
              item.who == 'me'
                ? {
                    marginLeft: 'auto',
                  }
                : {
                    marginRight: 'auto',
                    backgroundColor: theme.colors.gray
                  };
            return (
              <View style={[styles.message, sender]}>
                <Text style={{color: theme.colors.white}}>{item.message}</Text>
              </View>
            );
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Message"
          style={styles.input}
          value={message}
          onChangeText={text => setMessage(text)}
        />
        <FlatButton onPress={sendMessage} text="Send" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
  },
  messagesContainer: {
    flex: 1,
    width: '100%',
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    padding: scale(5),
  },
  input: {
    flex: 1,
    borderColor: theme.colors.lightBlue,
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 5,
    fontSize: 18,
    paddingHorizontal:10
  },
  message: {
    padding: 12,
    borderRadius: 10,
    backgroundColor: theme.colors.blue,
    maxWidth: '50%',
    margin: scale(4),
  },
});

export default ChatScreen;
