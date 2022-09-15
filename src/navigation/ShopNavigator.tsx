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

export type RootStackParamList = {
  ProductsOverviewScreen: undefined
  ProductDetailScreen: { productId: string; productTitle: string }
  CartScreen: undefined
}

export type NavigationProp = NativeStackScreenProps<RootStackParamList>

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

export { MainStackNavigator }
