import { View, StyleSheet } from 'react-native'

export default ({children,style}:any) => {
  return (
    <View style={{...styles.card, ...style}}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    borderColor: 'white',
  }
})
