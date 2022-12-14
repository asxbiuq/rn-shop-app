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
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import Card from '../../components/UI/Card'

export default () => {
  const cartTotalAmount = useAppSelector(totalAmount)
  const cartItems = useAppSelector(items)
  const dispatch = useAppDispatch()

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
      <Card style={styles.summary}>
        <Text style={styles.summaryText}>
          <Text>总和:</Text>
          <Text style={styles.amount}>¥{cartTotalAmount.toFixed(2)}</Text>
        </Text>
        <Button
          title="立刻下单"
          disabled={cartItems.length === 0}
          color={Colors.accent}
          onPress={() => {
            dispatch(addOrder({ cartItems, cartTotalAmount }))
            dispatch(clearCart())
          }}
        />
      </Card>
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
