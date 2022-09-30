import React from 'react'
import { Text, Image, View, TouchableOpacity } from 'react-native'

export interface Product {
  name: string,
  source: any
}

const ListView = ({ item }: { item: { product: Product, shop: string} }) => {
  const { product } = item
  const { shop } = item
  return (
    <TouchableOpacity>
      <View 
        style={{
          width: '100%',
          height: 80,
          borderBottomWidth: 0.3,
          borderBottomColor: '#c4c4c4',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10
        }}>
        <Image 
          source={product.source}
          style={{
            height: 75
          }}
        />
        <View style={{
          flexGrow: 1,
          padding: 10
        }}>
          <Text style={{
            marginBottom: 15
          }}>{product.name}</Text>
          <Text style={{ color: 'gray' }}>Shop { 
            <Text style={{ color: 'red' }}>{shop}</Text>
           } </Text>
        </View>
        <TouchableOpacity style={{
          width: 100,
          height: 50,
          backgroundColor: 'red',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
           <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Chat</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

export default ListView