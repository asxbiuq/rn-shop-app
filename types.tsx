/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { NativeStackScreenProps } from '@react-navigation/native-stack';


export interface Product  {
  id: string
  ownerId: string
  title: string
  imageUrl: string
  description: string
  price: number
}
export interface CartItem  {
  id: string
  quantity: number
  productPrice: number
  productTitle: string
  sum: number
}
export interface Order  {
  id: string
  items: CartItem[]
  totalAmount: number
  date: string
}

export type DrawerParamList = {
  MainStackNavigator: undefined
  Orders: undefined
  UserStackNavigator: undefined
}

export type DrawerNavigationProp = NativeStackScreenProps<DrawerParamList>

export type RootStackParamList = {
  ProductsOverviewScreen: undefined
  ProductDetailScreen: { productId: string; productTitle: string }
  CartScreen: undefined
}

export type StackNavigationProp = NativeStackScreenProps<RootStackParamList>


export type OrdersStackParamList = {
  OrdersScreen: undefined
}
export type OrdersNavigationProp = NativeStackScreenProps<OrdersStackParamList>

export type UserStackParamList = {
  UserProductsScreen: undefined
}