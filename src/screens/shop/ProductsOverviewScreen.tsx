import { FlatList } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { availableProducts } from '../../slice/productSlice'
import { Button, Text, View } from 'react-native'
import useHeaderTitle from '../../hooks/useHeaderTitle'
import ProductItem from '../../components/shop/ProductItem'
import { useNavigation } from '@react-navigation/native'
import { addToCart } from '../../slice/cartSlice'
import useHeaderRight from '../../hooks/useHeaderRight'
import HeaderButton from '../../components/UI/HeaderButton'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { DrawerActions } from '@react-navigation/native'
import { StackNavigationProp } from '../../../types'
import React from 'react'
import Colors from '../../constants/Colors'
import { AppDispatch } from '../../store'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useAppDispatch } from '../../hooks/useAppDispatch'

type ProductsOverviewScreenNavigationProp = StackNavigationProp['navigation']

export default () => {
  const products = useAppSelector(availableProducts)
  const navigation = useNavigation<ProductsOverviewScreenNavigationProp>()
  const dispatch = useAppDispatch()

  const selectItemHandler = (id: string, title: string) => {
    navigation.navigate('ProductDetailScreen', {
      productId: id,
      productTitle: title
    })
  }

  useHeaderTitle(() => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <View style={{ flexDirection: 'row' }}>
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
            title={'查看详情'}
            onPress={() => {
              selectItemHandler(item.id, item.title)
            }}
          />
          <Button 
            color={Colors.primary}
            title={'加入购物车'}
            onPress={() => {
              dispatch(addToCart(item))
            }}
          />
        </ProductItem>
      )}
      keyExtractor={(item) => item.id}
    />
  )
}
