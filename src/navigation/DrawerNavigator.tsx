import { createDrawerNavigator } from '@react-navigation/drawer'
// import TabNavigator from "./TabNavigator";
import { MainStackNavigator, OrdersStackNavigator, UserStackNavigator } from './StackNavigator'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/UI/HeaderButton'
import Colors from '../constants/Colors'
import DrawerHeaderButton from '../components/UI/DrawerHeaderButton'
import UserProductsScreen from '../screens/user/UserProductsScreen'


export type DrawerParamList = {
  MainStackNavigator: undefined
  Orders: undefined
  UserStackNavigator: undefined
}

export type NavigationProp = NativeStackScreenProps<DrawerParamList>

const Drawer = createDrawerNavigator()

const mainStackNavigatorDrawerIcon = () => (
  <HeaderButtons HeaderButtonComponent={DrawerHeaderButton}>
    <Item title="购物车" iconName={'cart'} />
  </HeaderButtons>
)

const ordersDrawerIcon = () => (
  <HeaderButtons HeaderButtonComponent={DrawerHeaderButton}>
    <Item title="菜单" iconName={'menu'} />
  </HeaderButtons>
)

const userProductsScreenIcon = () => (
  <HeaderButtons HeaderButtonComponent={DrawerHeaderButton}>
    <Item title="用户" iconName={'create'} />
  </HeaderButtons>
)

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
          drawerIcon: ordersDrawerIcon,
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
