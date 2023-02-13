//import {Filter, SearchNormal1} from 'iconsax-react-native';
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {theme} from '../../../Utils/theme';

export default function Header(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Product</Text>
      <View style={styles.iconsWrapper}>
        <View style={styles.icon}>
          {/*<Filter size="24" color={theme.colors.gray} />*/}
        </View>
        <View style={styles.icon}>
          {/*<SearchNormal1 size="24" color={theme.colors.gray} />*/}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.m,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 30,
    color: theme.colors.black,
  },
  iconsWrapper: {
    flexDirection: 'row',
    columnGap: 20,
  },
  icon: {
  },
});
