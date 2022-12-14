import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, userProducts } from '../../slice/productSlice'
import { FlatList, View, Text, Button } from 'react-native'
import ProductItem from '../../components/shop/ProductItem'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import useHeaderTitle from '../../hooks/useHeaderTitle'
import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
// import { NavigationProp } from "../../navigation/ShopNavigator"
import HeaderButton from '../../components/UI/HeaderButton'
import {
  ShopStackNavigationProp,
  UserScreenNavigationProp,
} from '../../../types'
import Colors from '../../constants/Colors'
import { addToCart, deleteCartProduct } from '../../slice/cartSlice'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import useHeaderRight from '../../hooks/useHeaderRight'

type UserProductsScreenNavigationProp = UserScreenNavigationProp['navigation']

export default () => {
  const products = useAppSelector(userProducts)
  const navigation = useNavigation<UserProductsScreenNavigationProp>()
  const dispatch = useAppDispatch()
  const editProductHandler = (id: string) => {
    navigation.navigate('EditProductScreen', {
      productId: id,
    })
  }
  useHeaderTitle(() => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <View style={{ flexDirection: 'row', justifyContent: 'center',alignItems: 'center' }}>
        <Item
          title="菜单"
          iconName={'menu'}
          onPress={() => {
            navigation.dispatch(DrawerActions.toggleDrawer())
          }}
        />
        <Text style={{ color: Colors.title }}>用户</Text>
      </View>
    </HeaderButtons>
  ))

  useHeaderRight(() => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <View style={{ flexDirection: 'row' }}>
        <Item
          title="菜单"
          iconName={'create'}
          onPress={() => {
            navigation.navigate('EditProductScreen', {})
          }}
        />
      </View>
    </HeaderButtons>
  ))

  return (
    <FlatList
      data={products}
      keyExtractor={(product) => product.id}
      renderItem={({ item }) => (
        <ProductItem
          imageUrl={item.imageUrl}
          title={item.title}
          price={item.price}
          onSelect={() => {
            editProductHandler(item.id)
          }}
        >
          <Button
            color={Colors.primary}
            title={'编辑'}
            onPress={() => {
              editProductHandler(item.id)
            }}
          />
          <Button
            color={Colors.primary}
            title={'删除'}
            onPress={() => {
              dispatch(deleteProduct(item))
            }}
          />
        </ProductItem>
      )}
    />
  )
}
