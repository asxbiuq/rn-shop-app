import { createDrawerNavigator } from '@react-navigation/drawer'
import {
  MainStackNavigator,
  OrdersStackNavigator,
  UserStackNavigator,
} from './StackNavigator'
import { ordersStackDrawerIcon } from '../components/UI/ordersStackDrawerIcon'
import { userProductsScreenIcon } from '../components/UI/userProductsScreenIcon'
import { mainStackNavigatorDrawerIcon } from '../components/UI/mainStackDrawerIcon'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: 'white',
          width: 240,
        },
        drawerActiveTintColor: 'red',
      }}
    >
      <Drawer.Screen
        name="商城"
        component={MainStackNavigator}
        options={{
          drawerIcon: mainStackNavigatorDrawerIcon,
        }}
      />
      <Drawer.Screen
        name="订单"
        component={OrdersStackNavigator}
        options={{
          drawerIcon: ordersStackDrawerIcon,
        }}
      />
      <Drawer.Screen
        name="用户"
        component={UserStackNavigator}
        options={{
          drawerIcon: userProductsScreenIcon,
        }}
      />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator
