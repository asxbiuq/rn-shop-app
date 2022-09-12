import { FlatList } from "react-native-gesture-handler"
import { useSelector } from "react-redux"
import { availableProducts } from "../../slice"
import { Text } from "react-native"
import useHeaderTitle from "../../hooks/useHeaderTitle"



export default () => {
  const products = useSelector(availableProducts)

  useHeaderTitle(()=><Text>All Product</Text>)

  return (
    <FlatList 
      data={products} 
      renderItem={product => <Text>{product.item.title}</Text>}
      keyExtractor={item => item.id}
    />
  )
}

