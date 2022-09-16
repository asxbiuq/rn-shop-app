import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack'
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen'
import Colors from '../constants/Colors'
import ProductDetailScreen from '../screens/shop/ProductDetailScreen'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { NavigatorScreenParams } from '@react-navigation/native'
import CartScreen from '../screens/shop/CartScreen'
import OrdersScreen from '../screens/shop/OrdersScreen'
import type { CompositeScreenProps } from '@react-navigation/native';

export type RootStackParamList = {
  ProductsOverviewScreen: NavigatorScreenParams<OrdersStackParamList>
  ProductDetailScreen: { productId: string; productTitle: string }
  CartScreen: undefined
}

export type StackScreenProps = NativeStackScreenProps<RootStackParamList>
// type ProfileScreenProps = CompositeScreenProps<
//   NavigationProp<TabParamList, 'Profile'>,
//   StackScreenProps<StackParamList>
// >;

const RootStack = createStackNavigator<RootStackParamList>()

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
  headerShown: true,
}

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

export type OrdersStackParamList = {
  OrdersScreen: undefined
}
export type OrdersNavigationProp = NativeStackScreenProps<OrdersStackParamList>


const OrdersStack = createStackNavigator<OrdersStackParamList>()

const OrdersStackNavigator = () => {
  return (
    <OrdersStack.Navigator screenOptions={screenOptionStyle}>
      <OrdersStack.Screen
        name="OrdersScreen"
        component={OrdersScreen}
      />
    </OrdersStack.Navigator>
  )
}
// type ProductsOverviewScreenProps = CompositeScreenProps<
//   StackScreenProps<RootStackParamList>,
//   DrawerScreenProps<DrawerParamList>
  
// >;

export { MainStackNavigator, OrdersStackNavigator }
