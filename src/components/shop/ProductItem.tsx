import React from "react"
import { View, Image, Text, Button, StyleSheet } from "react-native"

interface Props {
  imageUrl: string
  title: string
  price: number
  onViewDetail: (event: any) => void
  onAddToCar: (event: any) => void
}

export default ({ imageUrl, title, price, onViewDetail, onAddToCar }: Props) => {
  return (
    <View style={ styles.product }>
      <Image source={{ uri: imageUrl }} style={styles.image}/>
      <View style={ styles.details }>
        <Text style={ styles.title }>{title}</Text>
        <Text style={ styles.price }>${price.toFixed()}</Text>
      </View>
      <View style={ styles.action }>
        <Button title='View Details' onPress={ onViewDetail }/>
        <Button title='To Cart' onPress={ onAddToCar }/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  product: {
    height: 300,
    shadowColor: 'black',
    shadowOpacity:  0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    borderColor: 'white',
    marginVertical: 20,
    marginHorizontal: 10,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '60%'
  },
  title: {
    fontSize: 18,
    marginVertical: 4
  },
  price: {
    fontSize: 14,
    color: '#888'
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%',
    paddingHorizontal: 20
  },
  details: {
    alignItems: 'center',
    height: '15%',
    // padding: 15,
    paddingEnd: 20,
    paddingHorizontal: 20
  }
})