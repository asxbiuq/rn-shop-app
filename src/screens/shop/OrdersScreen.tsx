import { useSelector } from 'react-redux'
import { orders } from '../../slice/orderSlice'
import { FlatList, Text, View } from 'react-native'
import useHeaderTitle from '../../hooks/useHeaderTitle'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../../components/UI/HeaderButton'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import OrderItem from '../../components/shop/OrderItem'
import dayjs from 'dayjs'
import isLeapYear from 'dayjs/plugin/isLeapYear'
import 'dayjs/locale/zh-cn'
import { useAppSelector } from '../../hooks/useAppSelector'
import Colors from '../../constants/Colors'
import { ShopStackNavigationProp } from '../../../types'

dayjs.extend(isLeapYear) // 使用插件
dayjs.locale('zh-cn') // 使用本地化语言

type OrdersScreenNavigationProp = ShopStackNavigationProp['navigation']

export default () => {
  const userOrders = useAppSelector(orders)
  const navigation = useNavigation<OrdersScreenNavigationProp>()

  useHeaderTitle(() => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <View style={{ flexDirection: 'row', justifyContent: 'center',alignItems: 'center' }}>
        <Item
          title="购物车"
          iconName={'menu'}
          onPress={() => {
            navigation.dispatch(DrawerActions.toggleDrawer())
          }}
        />
        <Text style={{ color: Colors.title }}>你的订单</Text>
      </View>
    </HeaderButtons>
  ))
  return (
    <FlatList
      data={userOrders}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <OrderItem
          amount={item.totalAmount}
          date={item.date}
          items={item.items}
        />
      )}
    />
  )
}
