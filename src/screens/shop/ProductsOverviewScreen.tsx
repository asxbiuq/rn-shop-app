import { FlatList } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { availableProducts } from '../../slice/productSlice'
import { Text, View } from 'react-native'
import useHeaderTitle from '../../hooks/useHeaderTitle'
import ProductItem from '../../components/shop/ProductItem'
import { useNavigation } from '@react-navigation/native'
import type { NavigationProp } from '../../navigation/ShopNavigator'
import { addToCart } from '../../slice/cartSlice'
import useHeaderRight from '../../hooks/useHeaderRight'
import HeaderButton from '../../components/UI/HeaderButton'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { DrawerActions } from '@react-navigation/native';
// type Props = NativeStackScreenProps<RootStackParamList>
type ProductsOverviewScreenNavigationProp = NavigationProp['navigation']

export default () => {
  const products = useSelector(availableProducts)
  const navigation = useNavigation<ProductsOverviewScreenNavigationProp>()
  const dispatch = useDispatch()

  useHeaderTitle(() => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <View style={{flexDirection:'row'}}>
        <Item
          title="购物车"
          iconName={'menu'}
          onPress={() => {
            navigation.dispatch(DrawerActions.toggleDrawer())
          }}
        />
        <Text>所有商品</Text>
      </View>
    </HeaderButtons>
  ))
  useHeaderRight(() => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="购物车"
        iconName={'cart'}
        onPress={() => navigation.navigate('CartScreen')}
      />
    </HeaderButtons>
  ))

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
