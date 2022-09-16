import { createSlice, current } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CARTITEM } from '../data/dummy-data'
import { Order } from '../../types'



export interface OrderState {
  orders: Order[]
}

const initialState: OrderState = {
  orders: []
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addOrder: (state, action) => {
      const { cartItems, cartTotalAmount } = action.payload
      const newOrder: Order = {
        id: new Date().toString(),
        items: cartItems,
        totalAmount: cartTotalAmount,
        date: new Date().toString()
      }
     
      return {
        ...state,
        orders: state.orders.concat(newOrder)
      }
    },

  },
})

export interface State {
  order: {
    orders: Order[]
  }
}
export const orders = (state: State) => state.order.orders


// Action creators are generated for each case reducer function
export const { addOrder } = orderSlice.actions

export const orderReducer = orderSlice.reducer
