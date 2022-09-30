import React from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import GridViewItem, { GProduct } from "./GridViewItem"

const GridView = ({items}: {items: GProduct[]}) => {
  return (
    <View style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'row'
    }}>
      {
        items.map((item: GProduct, index: number) => (
          <GridViewItem item={item} key={index} />
        ))
      }
    </View>
  )
}

export default GridView