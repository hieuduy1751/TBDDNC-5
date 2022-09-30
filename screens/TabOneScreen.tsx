import { FlatList, StyleSheet } from 'react-native';
import ListView from '../components/ListView';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const DATA = [
    {
      product: {
        name: 'Ca nấu lẩu, nấu mì mini',
        source: require('./../assets/images/ca_nau_lau.png')
      },
      shop: 'Devang'
    },
    {
      product: {
        name: '1KG Khô gà bơ tỏi',
        source: require('./../assets/images/ga_bo_toi.png')
      },
      shop: 'LTD Food'
    },
    {
      product: {
        name: 'Xe cần cẩu đa năng',
        source: require('./../assets/images/xa_can_cau.png')
      },
      shop: 'Thế giới đồ chơi'
    },
    {
      product: {
        name: 'Đồ chơi dạng mô hình',
        source: require('./../assets/images/do_choi_dang_mo_hinh.png')
      },
      shop: 'Thế giới đồ chơi'
    },
    {
      product: {
        name: 'Lãnh đạo giản đơn',
        source: require('./../assets/images/lanh_dao_gian_don.png')
      },
      shop: 'Minh Long Book'
    },
    {
      product: {
        name: 'Hiểu lòng con trẻ',
        source: require('./../assets/images/hieu_long_con_tre.png')
      },
      shop: 'Minh Long Book'
    },



  ]

  return (
    <View style={styles.container}>
      <View style={{
        width: '80%',
        height: 70,
        justifyContent: 'center',
      }}>
        <Text>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop</Text>
      </View>
      <View style={{
        width: '100%',
        height: '100%'
      }}>
        <FlatList data={DATA} renderItem={ListView} keyExtractor={item => item.product.name} style={{
          borderBottomColor: '#c4c4c4',
          borderBottomWidth: 0.3,
          borderTopColor: '#c4c4c4',
          borderTopWidth: 0.3
        }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
