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
import { StackNavigationProp } from '../../../types'
import Colors from '../../constants/Colors'
import { addToCart, deleteCartProduct } from '../../slice/cartSlice'

type UserProductsScreenNavigationProp = StackNavigationProp['navigation']

export default () => {
  const products = useSelector(userProducts)
  const navigation = useNavigation<UserProductsScreenNavigationProp>()
  const dispatch = useDispatch()

  useHeaderTitle(() => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <View style={{ flexDirection: 'row' }}>
        <Item
          title="菜单"
          iconName={'menu'}
          onPress={() => {
            navigation.dispatch(DrawerActions.toggleDrawer())
          }}
        />
        <Text>用户</Text>
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
            
          }}
        >
          <Button 
            color={Colors.primary}
            title={'编辑'}
            onPress={() => {

            }}
          />
          <Button 
            color={Colors.primary}
            title={'删除'}
            onPress={() => {
              dispatch(deleteProduct(item))
              // dispatch(deleteCartProduct(item))
            }}
          />
        </ProductItem>
      )}
    />
  )
}


