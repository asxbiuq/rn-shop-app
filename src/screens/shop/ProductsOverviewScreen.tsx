import { FlatList } from "react-native-gesture-handler"
import { useSelector } from "react-redux"
import { availableProducts } from "../../slice"
import { Text } from "react-native"


export default () => {
  const products = useSelector(availableProducts)

  return (
    <FlatList 
      data={products} 
      renderItem={itemData => <Text>{itemData.item.title}</Text>}
      keyExtractor={item => item.id}
    />
  )
}

