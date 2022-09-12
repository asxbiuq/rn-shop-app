// import { ShopNavigatorParamList } from '../../types';
import { createStackNavigator } from '@react-navigation/stack';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen'
import Colors from '../constants/Colors'

type RootStackParamList = {
  // Home: undefined;
  // Profile: { userId: string };
  // Feed: { sort: 'latest' | 'top' } | undefined;
  ProductsOverviewScreen: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

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
    <RootStack.Navigator initialRouteName="ProductsOverviewScreen" screenOptions={screenOptionStyle}>
      <RootStack.Screen name="ProductsOverviewScreen" component={ProductsOverviewScreen} />
    </RootStack.Navigator>
  )
}

// const FavoriteStackNavigator = () => {
//   return (
//     <Stack.Navigator screenOptions={screenOptionStyle}>
//       <Stack.Screen name='Favorites' component={FavoritesScreen} />
//     </Stack.Navigator>
//   )
// }

// const FilterStackNavigator = () => {
//   return (
//     <Stack.Navigator screenOptions={screenOptionStyle}>
//       <Stack.Screen name='Filters' component={FiltersScreen} />
//     </Stack.Navigator>
//   )
// }

export { MainStackNavigator }
