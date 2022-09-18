import { useDispatch } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { PRODUCTS } from '../data/dummy-data'
import { Product } from '../../types'



export interface ProductState {
  availableProducts: Product[]
  userProducts: Product[]
}

const initialState: ProductState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((prod) => prod.ownerId === '1354214'),
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    deleteProduct: (state, action: PayloadAction<Product>) => {
      return {
        ...state,
        userProducts: state.userProducts.filter(prod => prod.id !== action.payload.id),
        availableProducts: state.availableProducts.filter(prod => prod.id !== action.payload.id),
      }
    },
  },
})
export interface State {
  product: ProductState
}
export const availableProducts = (state: State) => state.product.availableProducts
export const userProducts = (state: State) => state.product.userProducts
// Action creators are generated for each case reducer function
export const { deleteProduct } = productSlice.actions

export const productReducer = productSlice.reducer
