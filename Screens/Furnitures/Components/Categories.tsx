import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {theme} from '../../../Utils/theme';

export default function Categories(): JSX.Element {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={[styles.item, {  borderBottomColor: theme.colors.black  }]}>
            <Text style={[styles.itemText, {color: theme.colors.black, }]}>All</Text>
        </View>
        <View style={styles.item}>
            <Text style={styles.itemText}>Newest</Text>
        </View>
        <View style={styles.item}>
            <Text style={styles.itemText}>Popular</Text>
        </View>
        <View style={styles.item}>
            <Text style={styles.itemText}>Chair</Text>
        </View>
        <View style={styles.item}>
            <Text style={styles.itemText}>Table</Text>
        </View>
        <View style={styles.item}>
            <Text style={styles.itemText}>Sofa</Text>
        </View>
        <View style={styles.item}>
            <Text style={styles.itemText}>Chaise</Text>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  item:{
    paddingHorizontal: theme.spacing.s,
    marginHorizontal: theme.spacing.m,
    borderWidth: 1.5,
    borderColor: 'transparent',
  },
  itemText: {
    fontSize: 20,
    color: theme.colors.gray,
  },
});
