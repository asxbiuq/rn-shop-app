import { FlatList } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { availableProducts } from '../../slice/productSlice'
import { Text } from 'react-native'
import useHeaderTitle from '../../hooks/useHeaderTitle'
import ProductItem from '../../components/shop/ProductItem'
import { useNavigation } from '@react-navigation/native'
import type { NavigationProp } from '../../navigation/ShopNavigator'
import { addToCart } from '../../slice/cartSlice'


// type Props = NativeStackScreenProps<RootStackParamList>
type ProductsOverviewScreenNavigationProp = NavigationProp['navigation']

export default () => {
  const products = useSelector(availableProducts)
  const navigation = useNavigation<ProductsOverviewScreenNavigationProp>()
  const dispatch = useDispatch()

  useHeaderTitle(() => <Text>All Product</Text>)

  return (
    <FlatList
      data={products}
      renderItem={({ item: { imageUrl, title, price, id } }) => (
        <ProductItem
          imageUrl={imageUrl}
          title={title}
          price={price}
          onViewDetail={() => {
            navigation.navigate('ProductDetailScreen', {
              productId: id,
              productTitle: title,
            })
          }}
          onAddToCart={() => {
            dispatch(addToCart({ title, price }))
          }}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  )
}
