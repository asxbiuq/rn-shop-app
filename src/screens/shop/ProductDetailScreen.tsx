import { useRoute } from '@react-navigation/native'
import { View, Text, Image, Button, StyleSheet } from 'react-native'
import type { RouteProp } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { availableProducts } from '../../slice/productSlice'
import useHeaderTitle from '../../hooks/useHeaderTitle'
import { ScrollView } from 'react-native-gesture-handler'
import { addToCart } from '../../slice/cartSlice'
import { RootStackParamList } from '../../../types'
import { AppDispatch } from '../../store'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'

type ProductDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  'ProductDetailScreen'
>

export default () => {
  const route = useRoute<ProductDetailScreenRouteProp>()
  const { productId, productTitle } = route.params
  const selectedProduct = useAppSelector(availableProducts).find(
    (prod) => prod.id === productId
  )
  const dispatch = useAppDispatch()

  useHeaderTitle(() => <Text>{productTitle}</Text>)

  if (!selectedProduct) {
    return null
  }
  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
      <View style={styles.action}>
        <Button
          title="加入购物车"
          onPress={() => {
            dispatch(addToCart(selectedProduct))
          }}
        />
      </View>
      <Text style={styles.price}>${selectedProduct?.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedProduct?.description}</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  action: {
    marginVertical: 10,
    alignItems: 'center',
  },
  price: {
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
  },
})
