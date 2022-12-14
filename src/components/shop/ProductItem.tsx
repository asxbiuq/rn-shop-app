import React from 'react'
import {
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native'
import Colors from '../../constants/Colors'

interface Props {
  imageUrl: string
  title: string
  price: number
  children: React.ReactNode
  onSelect?: (event: GestureResponderEvent) => void
}

export default ({ imageUrl, title, price, children, onSelect }: Props) => {
  return (
    <TouchableOpacity onPress={onSelect}>
      <View style={styles.product}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>¥{price.toFixed(2)}</Text>
        </View>
        <View style={styles.actions}>{children}</View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  product: {
    height: 280,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    borderColor: 'white',
    marginVertical: 20,
    marginHorizontal: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  details: {
    alignItems: 'center',
    height: '20%',
    paddingHorizontal: 20,
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    overflow: 'hidden',
  },
})
