import { FlatList } from "react-native-gesture-handler"
import { useSelector } from "react-redux"
import { availableProducts } from "../../slice"
import { Text } from "react-native"


export default () => {
  const products = useSelector(availableProducts)
  console.log(products)
  return (
    <FlatList 
      data={products} 
      renderItem={product => <Text>{product.item.title}</Text>}
      keyExtractor={item => item.id}
    />
  )
}

