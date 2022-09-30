import { Image, Text, TouchableOpacity, View } from "react-native"

export interface GProduct {
  name: string,
  source: any,
  rating: number,
  ratingCount: number,
  price: number,
  promote: number
}

const GridViewItem = ({ item }: { item: GProduct }) => {
  return (
    <TouchableOpacity>
      <View style={{
        width: '50%',
        height: '25%',
        padding: 5,
      }}>
        <Image source={item.source} style={{
          width: '100%'
        }} />
        <Text>{item.name}</Text>
        <View>
          <View>

          </View>
          <Text>({item.ratingCount})</Text>
        </View>
        <View>
          <Text>{item.price}</Text>
          <Text>-{item.promote}%</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default GridViewItem