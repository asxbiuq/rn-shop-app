import { useDispatch } from 'react-redux'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { PRODUCTS } from '../data/dummy-data'
import { Product } from '../../types'
import { deleteCartProduct } from './cartSlice'

export interface ProductState {
  availableProducts: Product[]
  userProducts: Product[]
}

const initialState: ProductState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((prod) => prod.ownerId === '123456'),
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    deleteProduct: (state, action: PayloadAction<Product>) => {
      console.log('deleteProduct')
      return {
        ...state,
        userProducts: state.userProducts.filter(
          (prod) => prod.id !== action.payload.id
        ),
        availableProducts: state.availableProducts.filter(
          (prod) => prod.id !== action.payload.id
        ),
      }
    },
    createProduct: (state, action: PayloadAction<Product>) => {
      return {
        ...state,
        availableProducts: state.availableProducts.concat(action.payload),
        userProducts: state.userProducts.concat(action.payload),
      }
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      const updatedProduct = action.payload

      const updatedAvailableProducts = state.availableProducts.map((prod) =>
        prod.id === updatedProduct.id ? updatedProduct : prod
      )

      const updatedUserProducts = state.userProducts.map((prod) =>
        prod.id === updatedProduct.id ? updatedProduct : prod
      )

      return {
        ...state,
        availableProducts: updatedAvailableProducts,
        userProducts: updatedUserProducts
      }
    },
  },
})
export interface State {
  product: ProductState
}
export const availableProducts = (state: State) =>
  state.product.availableProducts
export const userProducts = (state: State) => state.product.userProducts
// Action creators are generated for each case reducer function
export const { deleteProduct, createProduct, updateProduct } = productSlice.actions

export const productReducer = productSlice.reducer
