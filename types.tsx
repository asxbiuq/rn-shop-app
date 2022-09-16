/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { DrawerScreenProps } from '@react-navigation/drawer'; 
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
    // interface ShopParamList extends ShopNavigatorParamList {}
  }
}

export type RootStackParamList = {
  shop: NavigatorScreenParams<RootDrawerParamList> | undefined;
  Orders: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootDrawerParamList = {
  MainStackNavigator: undefined
  Orders:undefined
}



export type RootDrawerScreenProps<Screen extends keyof RootDrawerParamList> = CompositeScreenProps<
  DrawerScreenProps<RootDrawerParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

interface Product  {
  id: string
  ownerId: string
  title: string
  imageUrl: string
  description: string
  price: number
}
interface CartItem  {
  quantity: number
  productPrice: number
  productTitle: string
  sum: number
}
interface Order  {
  id: string
  items: CartItem
  totalAmount: number
  date: string
}