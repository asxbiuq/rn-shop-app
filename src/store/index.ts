import { configureStore } from '@reduxjs/toolkit'
import { productReducer } from '../slice/productSlice'
import { cartReducer } from '../slice/cartSlice'

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
})

export type ProductState = ReturnType<typeof store.getState>
export type ProductDispatch = typeof store.dispatch

export default store
