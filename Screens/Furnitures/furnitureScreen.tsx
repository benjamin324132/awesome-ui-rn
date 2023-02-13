import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import { theme } from '../../Utils/theme';
import BottomBar from './Components/BottomBar';
import Categories from './Components/Categories';
import Header from './Components/Header';
import ItemsList from './Components/ItemsList';

export default function FurnituresScreen(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <Categories />
        <ItemsList />
      </ScrollView>
      <View>
        <BottomBar />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white
  },
});
