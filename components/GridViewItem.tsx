import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export interface GProduct {
  name: string;
  source: any;
  rating: number;
  ratingCount: number;
  price: number;
  promote: number;
}

const GridViewItem = ({ item }: { item: GProduct }) => {
  const priceTransform = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  return (
    <TouchableOpacity
      style={{
        width: '50%',
        padding: 20,
      }}
    >
      <View
        style={{
          width: '100%',
        }}
      >
        <Image
          source={item.source}
          style={{
            width: '100%',
          }}
        />
        <Text
          style={{
            fontSize: 14,
            marginVertical: 5,
          }}
        >
          {item.name}
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: 80,
              justifyContent: 'space-between',
              marginBottom: 5,
            }}
          >
            <Ionicons
              name="ios-star"
              size={15}
              color={item.rating >= 1 ? 'yellow' : 'gray'}
            />
            <Ionicons
              name="ios-star"
              size={15}
              color={item.rating >= 2 ? 'yellow' : 'gray'}
            />
            <Ionicons
              name="ios-star"
              size={15}
              color={item.rating >= 3 ? 'yellow' : 'gray'}
            />
            <Ionicons
              name="ios-star"
              size={15}
              color={item.rating >= 4 ? 'yellow' : 'gray'}
            />
            <Ionicons
              name="ios-star"
              size={15}
              color={item.rating >= 5 ? 'yellow' : 'gray'}
            />
          </View>
          <Text style={{ fontSize: 12 }}>({item.ratingCount})</Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Text style={{ marginRight: 15, fontSize: 14 }}>
            {priceTransform(item.price)} đ
          </Text>
          <Text style={{ color: 'gray', fontSize: 14 }}>-{item.promote}%</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default GridViewItem;
