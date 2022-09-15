import { createSlice, current } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CARTITEM } from '../data/dummy-data'

export interface State {
  cart: CartState
}

export interface CartState {
  items: CartItem[]
  totalAmount: number
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const addedProduct: Product = action.payload

      const prodPrice = addedProduct.price
      const proTitle = addedProduct.title
      let updatedOrNewCartItem: CartItem
      const { items, totalAmount }: { items: CartItem[]; totalAmount: number } =
        current(state)

      const addedItem = items.find(
        (item: CartItem) => item.productTitle === addedProduct.title
      )
      let newItems

      if (addedItem) {
        updatedOrNewCartItem = {
          quantity: addedItem.quantity + 1,
          productPrice: prodPrice,
          productTitle: proTitle,
          sum: addedItem.sum + prodPrice,
        }
        newItems = items.map((item:CartItem) => {
          if (item.productTitle === addedProduct.title) {
            return updatedOrNewCartItem
          }
          return item
        })
      } else {
        updatedOrNewCartItem = {
          quantity: 1,
          productPrice: prodPrice,
          productTitle: proTitle,
          sum: prodPrice,
        }
        newItems = [ ...items, updatedOrNewCartItem]
      }
      

      return {
        ...state,
        items: newItems,
        totalAmount: totalAmount + prodPrice,
      }
    },
  },
})

export const totalAmount = (state: State) => state.cart.totalAmount
export const items = (state: State) => state.cart.items

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions

export const cartReducer = cartSlice.reducer
