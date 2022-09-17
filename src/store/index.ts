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

// export type ProductState = ReturnType<typeof store.getState>
// export type ProductDispatch = typeof store.dispatch

export default store
