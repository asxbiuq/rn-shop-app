import { useSelector } from "react-redux"
import { orders } from "../../slice/orderSlice"
import { FlatList, Text, View } from 'react-native'
import useHeaderTitle from "../../hooks/useHeaderTitle"
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../../components/UI/HeaderButton'
import { DrawerActions, useNavigation } from '@react-navigation/native';
import type { NavigationProp } from '../../navigation/ShopNavigator'


type OrdersScreenNavigationProp = NavigationProp['navigation']


export default () => {
  const userOrders = useSelector(orders)
  const navigation = useNavigation<OrdersScreenNavigationProp>()


  // useHeaderTitle(() => <Text>你的订单</Text>)
  useHeaderTitle(() => (
    <HeaderButtons HeaderButtonComponent={HeaderButton} >
      <View style={{flexDirection:'row'}}>
        <Item
          title="购物车"
          iconName={'menu'}
          onPress={() => {
            navigation.dispatch(DrawerActions.toggleDrawer())
          }}
        />
        <Text>你的订单</Text>
      </View>
    </HeaderButtons>
  ))
  return (
    <FlatList 
      data={userOrders}
      keyExtractor={item => item.id}
      renderItem={({item}) => <Text>{item.totalAmount}</Text>}
    />
  )
}