import { FlatList } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import { availableProducts } from '../../slice'
import { Text } from 'react-native'
import useHeaderTitle from '../../hooks/useHeaderTitle'
import ProductItem from '../../components/shop/ProductItem'
import { useNavigation } from '@react-navigation/native'
// import { NavigationProp } from '../../navigation/ShopNavigator';
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../navigation/ShopNavigator'
import type { NavigationProp } from '../../navigation/ShopNavigator'

// type Props = NativeStackScreenProps<RootStackParamList>
type ProductsOverviewScreenNavigationProp = NavigationProp['navigation']

export default () => {
  const products = useSelector(availableProducts)
  const navigation = useNavigation<ProductsOverviewScreenNavigationProp>()

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
              productTitle: title
            })
          }}
          onAddToCar={() => {}}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  )
}
