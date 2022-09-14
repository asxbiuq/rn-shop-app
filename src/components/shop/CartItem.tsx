import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { GestureResponderEvent } from 'react-native'
import { totalAmount } from '../../slice/cartSlice';

interface Props {
  onRemove: (event: GestureResponderEvent) => void
  quantity: number
  title: string
  amount: number
}

export default ({onRemove,quantity,title,amount}:Props) => {
  return ( 
    <View style={styles.cartItem}>
      <Text style={styles.itemData}>
        <Text style={styles.quantity}>{quantity}</Text>{'  '}
        <Text style={styles.mainText}>{title}</Text>
      </Text>
      <View style={styles.itemIcon}>
        <Text style={styles.mainText}>${amount.toFixed(2)}</Text>
        <TouchableOpacity onPress={onRemove} style={styles.deleteButton}>
          <Ionicons 
            name='trash'
            size={23}
            color='red'
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    borderColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20
  },
  itemData: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  quantity: {
    fontFamily: 'open-sans',
    color: '#888',
    fontSize: 16
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 16
  },
  mainText: {
    fontFamily: 'open-sans-bold',
    fontSize: 16
  },
  amount: {
    fontFamily: 'open-sans-bold',
    fontSize: 16
  },
  deleteButton: {
    marginLeft: 20
  },
  itemIcon: {
    flexDirection: 'row'
  }
})