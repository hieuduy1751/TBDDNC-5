import { FlatList, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import GridView from '../components/GridView';
import { Text, View } from '../components/Themed';
import GridViewItem, { GProduct } from '../components/GridViewItem';

export default function TabTwoScreen() {
  const DATA: GProduct[] = [
    {
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      source: require('../assets/images/dauchuyendoipsps2.png'),
      rating: Math.floor(Math.random() * 5),
      ratingCount: Math.floor(Math.random() * 1000),
      price: Math.floor(Math.random() * 100000),
      promote: Math.floor(Math.random() * 100),
    },
    {
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      source: require('../assets/images/carbusbtops2.png'),
      rating: Math.floor(Math.random() * 5),
      ratingCount: Math.floor(Math.random() * 1000),
      price: Math.floor(Math.random() * 100000),
      promote: Math.floor(Math.random() * 100),
    },
    {
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      source: require('../assets/images/daucam.png'),
      rating: Math.floor(Math.random() * 5),
      ratingCount: Math.floor(Math.random() * 1000),
      price: Math.floor(Math.random() * 100000),
      promote: Math.floor(Math.random() * 100),
    },
    {
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      source: require('../assets/images/daynguon.png'),
      rating: Math.floor(Math.random() * 5),
      ratingCount: Math.floor(Math.random() * 1000),
      price: Math.floor(Math.random() * 100000),
      promote: Math.floor(Math.random() * 100),
    },
    {
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      source: require('../assets/images/giacchuyen.png'),
      rating: Math.floor(Math.random() * 5),
      ratingCount: Math.floor(Math.random() * 1000),
      price: Math.floor(Math.random() * 100000),
      promote: Math.floor(Math.random() * 100),
    },
    {
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      source: require('../assets/images/dauchuyendoi.png'),
      rating: Math.floor(Math.random() * 5),
      ratingCount: Math.floor(Math.random() * 1000),
      price: Math.floor(Math.random() * 100000),
      promote: Math.floor(Math.random() * 100),
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={GridViewItem}
        numColumns={2}
        keyExtractor={(items) => items.toString() + Math.random()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%'
  },
});
