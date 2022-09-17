import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'
import Colors from '../../constants/Colors'
import dayjs from 'dayjs'
import isLeapYear from 'dayjs/plugin/isLeapYear' // 导入插件
import 'dayjs/locale/zh-cn' // 导入本地化语言
import { useState } from 'react'
import { CartItem as Cart, Order } from '../../../types'
import CartItem from './CartItem'

dayjs.extend(isLeapYear) // 使用插件
dayjs.locale('zh-cn') // 使用本地化语言

interface Props {
  amount: number
  date: string
  items: Cart[]
}

export default ({ amount, date, items }: Props) => {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <View style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={styles.totalAmount}>${amount.toFixed(2)}</Text>
        <Text style={styles.date}>{dayjs(date).format('DD/MM/YYYY')}</Text>
      </View>
      <Button
        color={Colors.primary}
        title={showDetails ? '隐藏详情' : '查看详情'}
        onPress={() => {
          setShowDetails((prevState) => !prevState)
        }}
      />
      {showDetails && (
        <View style={styles.detailItems}>
          {items.map((item) => (
            <CartItem
              quantity={item.quantity}
              amount={item.sum}
              title={item.productTitle}
              onRemove={() => {}}
              key={item.productTitle}
            />
          ))}
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  orderItem: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 8,
    backgroundColor: 'white',
    margin: 20,
    padding: 10,
    alignItems: 'center',
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  totalAmount: {
    fontFamily: 'open-sans-bold',
    fontSize: 16,
  },
  date: {
    fontSize: 16,
    fontFamily: 'open-sans',
    color: '#888',
  },
  detailItems: {
    width: '100%',
  },
})
