import { useSelector } from "react-redux"
import { userProducts } from "../../slice/productSlice"
import { FlatList, View, Text } from 'react-native'
import ProductItem from "../../components/shop/ProductItem"
import { DrawerActions, useNavigation } from "@react-navigation/native"
import useHeaderTitle from "../../hooks/useHeaderTitle"
import React from "react"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import { NavigationProp } from "../../navigation/ShopNavigator"
import HeaderButton from '../../components/UI/HeaderButton'

type UserProductsScreenNavigationProp = NavigationProp['navigation']

export default () => {
  const products = useSelector(userProducts)
  const navigation = useNavigation<UserProductsScreenNavigationProp>()

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
      keyExtractor={product => product.id}
      renderItem={({item}) => 
      <ProductItem 
        imageUrl={item.imageUrl}
        title={item.title}
        price={item.price}
        onViewDetail={() => {}}
        onAddToCart={() => {}}
      />}
    />
  )
}