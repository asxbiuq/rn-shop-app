import { configureStore } from '@reduxjs/toolkit'
import { productReducer } from '../slice/productSlice'
import { cartReducer } from '../slice/cartSlice'
import { orderReducer } from '../slice/orderSlice'

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    order: orderReducer,
  },
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
