import { View, Text, FlatList, Button, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import {
  clearCart,
  items,
  removeFromCart,
  totalAmount,
} from '../../slice/cartSlice'
import Colors from '../../constants/Colors'
import CartItem from '../../components/shop/CartItem'
import { addOrder } from '../../slice/orderSlice'

export default () => {
  const cartTotalAmount = useSelector(totalAmount)
  const cartItems = useSelector(items)
  const dispatch = useDispatch()
  const transformedCartItems = cartItems.map((item, index) => {
    return {
      productId: index.toString(),
      productTitle: item.productTitle,
      productPrice: item.productPrice,
      quantity: item.quantity,
      sum: item.sum,
    }
  })

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          <Text>总和:</Text>
          <Text style={styles.amount}>${cartTotalAmount.toFixed(2)}</Text>
        </Text>
        <Button
          title="立刻下单"
          disabled={cartItems.length === 0}
          color={Colors.accent}
          onPress={() => {
            dispatch(addOrder({ cartItems, cartTotalAmount }))
            dispatch(clearCart(''))
          }}
        />
      </View>
      <FlatList
        data={transformedCartItems}
        keyExtractor={(item) => item.productId}
        renderItem={({ item }) => (
          <CartItem
            quantity={item.quantity}
            title={item.productTitle}
            amount={item.sum}
            onRemove={() => {
              dispatch(removeFromCart(item))
            }}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    borderColor: 'white',
  },
  summaryText: {
    width: '100%',
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    justifyContent: 'space-between',
  },
  amount: {
    color: Colors.accent,
  },
})
