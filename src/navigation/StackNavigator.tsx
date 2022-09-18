import { createStackNavigator } from '@react-navigation/stack'
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen'
import ProductDetailScreen from '../screens/shop/ProductDetailScreen'
import CartScreen from '../screens/shop/CartScreen'
import OrdersScreen from '../screens/shop/OrdersScreen'
import UserProductsScreen from '../screens/user/UserProductsScreen'
import {
  OrdersStackParamList,
  RootStackParamList,
  UserStackParamList,
} from '../../types'
import { screenOptionStyle } from './screenOptionStyle'
import EditProductScreen from '../screens/user/EditProductScreen'

const RootStack = createStackNavigator<RootStackParamList>()

const MainStackNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={screenOptionStyle}>
      <RootStack.Screen
        name="ProductsOverviewScreen"
        component={ProductsOverviewScreen}
      />
      <RootStack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
      />
      <RootStack.Screen name="CartScreen" component={CartScreen} />
    </RootStack.Navigator>
  )
}

const OrdersStack = createStackNavigator<OrdersStackParamList>()

const OrdersStackNavigator = () => {
  return (
    <OrdersStack.Navigator screenOptions={screenOptionStyle}>
      <OrdersStack.Screen name="OrdersScreen" component={OrdersScreen} />
    </OrdersStack.Navigator>
  )
}

const UserStack = createStackNavigator<UserStackParamList>()

const UserStackNavigator = () => {
  return (
    <UserStack.Navigator screenOptions={screenOptionStyle}>
      <UserStack.Screen
        name="UserProductsScreen"
        component={UserProductsScreen}
      />
      <UserStack.Screen
        name="EditProductScreen"
        component={EditProductScreen}
      />
    </UserStack.Navigator>
  )
}

export { MainStackNavigator, OrdersStackNavigator, UserStackNavigator }
