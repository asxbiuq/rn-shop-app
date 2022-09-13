import { useRoute } from '@react-navigation/native'
import { View, Text, Image, Button, StyleSheet } from 'react-native'
// import { NavigationProp } from "../../navigation/ShopNavigator"
// import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/ShopNavigator'
// import type { NavigationProp } from "../../navigation/ShopNavigator"
import type { RouteProp } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { availableProducts } from '../../slice'
import useHeaderTitle from '../../hooks/useHeaderTitle'
import { ScrollView } from 'react-native-gesture-handler'
// type Props = NativeStackScreenProps<RootStackParamList>
// type ProductDetailScreenRouteProp = NavigationProp['route']

type ProductDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  'ProductDetailScreen'
>

export default () => {
  const route = useRoute<ProductDetailScreenRouteProp>()
  const { productId, productTitle } = route.params
  const selectedProduct = useSelector(availableProducts).find(
    (prod) => prod.id === productId
  )

  useHeaderTitle(()=><Text>{productTitle}</Text>)

  return (
    <ScrollView>
      <Image style={styles.image} source={{uri: selectedProduct?.imageUrl}}/>
      <View style={styles.action}>
        <Button title='加入购物车'/>
      </View>
      <Text style={styles.price}>${selectedProduct?.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedProduct?.description}</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300
  },
  action: {
    marginVertical: 10,
    alignItems: 'center'
  },
  price: {
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20
  },
  description: {
    fontSize: 14,
    textAlign: 'center'
  }
})
