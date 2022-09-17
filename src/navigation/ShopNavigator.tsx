import { createStackNavigator } from '@react-navigation/stack'
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen'
import ProductDetailScreen from '../screens/shop/ProductDetailScreen'
import CartScreen from '../screens/shop/CartScreen'
import { RootStackParamList } from '../../types'
import { screenOptionStyle } from './screenOptionStyle'

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

export { MainStackNavigator }
