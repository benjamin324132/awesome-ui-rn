import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {scale, verticalScale} from '../../../Utils/scaling';
import {theme} from '../../../Utils/theme';

const items = [
  {
    title: 'Cotagges Sofa',
    price: 24,
    image:
      'https://www.ikea.com/mx/es/images/products/pello-sillon-holmby-natural__38296_pe130209_s5.jpg?f=xxs',
    colors: [theme.colors.white, theme.colors.green, theme.colors.blue],
    stock: 21,
  },
  {
    title: 'Makumbe Set',
    price: 120,
    image:
      'https://www.ikea.com/mx/es/images/products/tolkning-banca-con-almacenamiento-hecha-a-mano-ratan__1098691_pe865484_s5.jpg?f=xxs',
    colors: [theme.colors.black, theme.colors.green],
    stock: 21,
  },
  {
    title: 'Rumba Chair Seat',
    price: 34,
    image:
      'https://www.ikea.com/mx/es/images/products/froeset-silla-tinte-negro-chapa-roble__0824150_pe776003_s5.jpg?f=xxs',
    colors: [theme.colors.teal, theme.colors.cyan, theme.colors.black],
    stock: 12,
  },
  {
    title: 'Cotagges Stock',
    price: 100,
    image:
      'https://www.ikea.com/mx/es/images/products/sektion-gabinete-bajo-p-tarja-2-puertas-blanco-axstad-mate-azul__0960558_pe806790_s5.jpg?f=xxs',
    colors: [theme.colors.pink, theme.colors.purple, theme.colors.gray],
    stock: 150,
  },
  {
    title: 'Vintage Desk',
    price: 350,
    image:
      'https://www.ikea.com/mx/es/images/products/micke-escritorio-blanco__0736022_pe740349_s5.jpg?f=xxs',
    colors: [theme.colors.gray, theme.colors.red],
    stock: 32,
  },
  {
    title: 'Nordkisa',
    price: 600,
    image:
      'https://www.ikea.com/mx/es/images/products/nordkisa-buro-bambu__0756063_pe748759_s5.jpg?f=xxs',
    colors: [theme.colors.purple],
    stock: 10,
  },
  {
    title: 'Cobinet',
    price: 40,
    image:
      'https://www.ikea.com/mx/es/images/products/lommarp-gabinete-azul-oscuro-verdoso__0739327_pe741692_s5.jpg?f=xxs',
    colors: [theme.colors.black, theme.colors.lightBlue, theme.colors.teal],
    stock: 5,
  },
  {
    title: 'Idanas',
    price: 124,
    image:
      'https://www.ikea.com/mx/es/images/products/idanaes-gabinete-con-puertas-plegables-blanco__0898847_pe782661_s5.jpg?f=xxs',
    colors: [theme.colors.cyan, theme.colors.red, theme.colors.purple],
    stock: 21,
  },
];

export default function ItemsList(): JSX.Element {
  return (
    <View style={styles.container}>
      {items.map(item => (
        <View key={item.image} style={styles.item}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{
              uri: item.image,
            }}
          />
          <Text style={styles.title}>{item.title}</Text>
          <Text>Stock: {item.stock}</Text>
          <View style={styles.bottomWrapper}>
            <View style={[styles.bottomWrapper, {columnGap: 6}]}>
              {item.colors.map(color => (
                <View style={[styles.colorBox, {backgroundColor: color}]} />
              ))}
            </View>
            <View>
              <Text style={[styles.title, { color: theme.colors.black }]}>${item.price}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: theme.spacing.l,
    paddingHorizontal: theme.spacing.m,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: scale(10),
  },
  item: {
    height: verticalScale(250),
    width: '47%',
  },
  image: {
    borderRadius: 12,
    height: verticalScale(150),
    aspectRatio: 1,
  },
  title: {
    paddingVertical: verticalScale(5),
    color: '#979797',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xs,
  },
  colorBox: {
    width: scale(20),
    height: scale(20),
    borderRadius: 6,
    elevation: 6,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
