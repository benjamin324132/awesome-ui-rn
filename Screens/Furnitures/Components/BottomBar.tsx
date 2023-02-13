import {
  Filter,
  Heart,
  Home,
  SearchNormal1,
  ShoppingCart,
} from 'iconsax-react-native';
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {theme} from '../../../Utils/theme';

export default function BottomBar(): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Home size="32" color="#d9e3f0" />
      </View>
      <View style={styles.icon}>
        <Heart size="32" color="#d9e3f0" />
      </View>
      <View style={styles.icon}>
        <SearchNormal1 size="32" color="#d9e3f0" />
      </View>
      <View style={styles.icon}>
        <ShoppingCart size="32" color="#d9e3f0" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  icon: {},
});
