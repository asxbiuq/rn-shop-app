import { createDrawerNavigator } from "@react-navigation/drawer";
// import TabNavigator from "./TabNavigator";
import { MainStackNavigator, OrdersStackNavigator } from "./StackNavigator";
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/UI/HeaderButton";
import Colors from "../constants/Colors";
import DrawerHeaderButton from "../components/UI/DrawerHeaderButton";

export type DrawerParamList = {
  MainStackNavigator: undefined
  Orders:undefined
}

export type NavigationProp = NativeStackScreenProps<DrawerParamList>

const Drawer = createDrawerNavigator();

const mainStackNavigatorDrawerIcon =  () => (
  <HeaderButtons HeaderButtonComponent={DrawerHeaderButton}>
    <Item
      title="购物车"
      iconName={'cart'}
    />
  </HeaderButtons>
)

const ordersDrawerIcon = () => (
  <HeaderButtons HeaderButtonComponent={DrawerHeaderButton}>
    <Item
      title="菜单"
      iconName={'menu'}
    />
  </HeaderButtons>
)

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ 
      headerShown: false, 
      drawerStyle: {
        backgroundColor: 'white',
        width: 240,
      },
      drawerActiveTintColor: 'red'
    }}>
      <Drawer.Screen 
        name="商城" 
        component={MainStackNavigator}
        options={{
          drawerIcon: mainStackNavigatorDrawerIcon,
          drawerItemStyle:{
            shadowColor:'red'
          },
          drawerActiveTintColor: 'blue'
        }}
      />
      <Drawer.Screen 
        name="订单" 
        component={OrdersStackNavigator} 
        options={{
          drawerIcon: ordersDrawerIcon,
        }}
      />
    </Drawer.Navigator>
  );
};



export default DrawerNavigator;
