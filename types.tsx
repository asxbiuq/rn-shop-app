// /**
//  * Learn more about using TypeScript with React Navigation:
//  * https://reactnavigation.org/docs/typescript/
//  */

// import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
// import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';

// declare global {
//   namespace ReactNavigation {
//     interface RootParamList extends RootStackParamList {}
//     // interface ShopParamList extends ShopNavigatorParamList {}
//   }
// }

// export type RootStackParamList = {
//   Root: NavigatorScreenParams<RootTabParamList> | undefined;
//   Modal: undefined;
//   NotFound: undefined;
// };

// export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
//   RootStackParamList,
//   Screen
// >;

// export type RootTabParamList = {
//   TabOne: undefined;
//   TabTwo: undefined;
// };

// // export type ShopNavigatorParamList = {
// //   ProductsOverviewScreen: undefined
// // }

// export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
//   BottomTabScreenProps<RootTabParamList, Screen>,
//   NativeStackScreenProps<RootStackParamList>
// >;

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