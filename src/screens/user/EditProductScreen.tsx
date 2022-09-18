import { Text, ScrollView, TextInput, StyleSheet, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../../components/UI/HeaderButton'
import useHeaderRight from '../../hooks/useHeaderRight'
import { RouteProp, useRoute } from '@react-navigation/native'
import { UserStackParamList } from '../../../types'
import { useAppSelector } from '../../hooks/useAppSelector'
import { createProduct, updateProduct, userProducts } from '../../slice/productSlice'
import { useAppDispatch } from '../../hooks/useAppDispatch'

type EditProductScreenRouteProp = RouteProp<
  UserStackParamList,
  'EditProductScreen'
>

export default () => {
  const route = useRoute<EditProductScreenRouteProp>()
  let productId: string
  if (route.params?.productId) {
    productId = route.params?.productId
  } else {
    productId = ''
  }

  const userProds = useAppSelector(userProducts)

  const editedProduct = userProds.find((prod) => prod.id === productId)

  const [title, setTitle] = useState(editedProduct ? editedProduct.title : '')
  const [imageUrl, setImageUrl] = useState(
    editedProduct ? editedProduct.imageUrl : ''
  )
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState(
    editedProduct ? editedProduct.description : ''
  )

  const dispatch = useAppDispatch()
  const submitHandler = useCallback(() => {
    if (editedProduct) {
      const updatedProduct = {
        id: editedProduct.id,
        ownerId: editedProduct.ownerId,
        title,
        imageUrl,
        price: +price,
        description
      }
      dispatch(updateProduct(updatedProduct))
    } else {
      const id = (Math.random()*100).toString()
      const newProduct = {
        id: id,
        ownerId: '123456',
        title,
        imageUrl,
        price: +price,
        description
      }
      dispatch(createProduct(newProduct))
    }
  }, [dispatch, productId, title, imageUrl, price, description])

  useHeaderRight(() => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title="菜单" iconName={'save'} onPress={submitHandler} />
    </HeaderButtons>
  ))

  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>标题</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={(text) => setTitle(text)}
          ></TextInput>''4
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>商品图片地址</Text>
          <TextInput
            style={styles.input}
            value={imageUrl}
            onChangeText={(text) => setImageUrl(text)}
          ></TextInput>
        </View>
        {/* {editedProduct ? null : ( */}
          <View style={styles.formControl}>
            <Text style={styles.label}>价格</Text>
            <TextInput
              style={styles.input}
              value={price.toString()}
              onChangeText={(text) => setPrice(text)}
            ></TextInput>
          </View>
        {/* )} */}
        <View style={styles.formControl}>
          <Text style={styles.label}>描述</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={(text) => setDescription(text)}
          ></TextInput>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  form: {
    margin: 20,
  },
  formControl: {
    width: '100%',
  },
  label: {
    fontFamily: 'open-sans-bold',
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomEndRadius: 1,
  },
})
