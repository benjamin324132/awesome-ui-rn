import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';

import axios from 'axios';
import {NavigationProp} from '@react-navigation/native';
import {verticalScale} from '../../Utils/scaling';
import {Movie} from '../../types/movie';
import {theme} from '../../Utils/theme';

const MoviesScreen: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const {data} = await axios.get(
        'https://ade-server.glitch.me/api/v1/movies',
      );
      setMovies(data.movies);
    } catch (err) {}
  };

  return (
    <ScrollView>
      <SafeAreaView
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={styles.container}>
          {movies.map(movie => (
            <View key={movie._id} style={styles.square}>
              
              <Image
              style={styles.image}
                resizeMode="cover"
                source={{
                  uri: movie.image,
                }}
              />
              <Text>{movie.title}</Text>
            </View>
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  square: {
    width: '45%',
    height: verticalScale(270),
    margin: 4,
    
  },
  image:{
    height: verticalScale(240),
    borderRadius: 12,
  }
});

export default MoviesScreen;
