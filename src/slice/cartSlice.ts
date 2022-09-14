import { createSlice, current  } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CARTITEM } from '../data/dummy-data'

export interface State {
  cart: CartState
}

export interface CartState {
  items: CartItem[]
  totalAmount: number
}

const initialState  = {
  items: CARTITEM,
  totalAmount: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const addedProduct:Product = action.payload

      const prodPrice = addedProduct.price
      const proTitle = addedProduct.title
      let updatedOrNewCartItem
      const { items, totalAmount } :{items:any,totalAmount:any} = current(state)

      const addedItem = items.filter((item:any) => item.id === addedProduct.id)

      
      if (items) {
        updatedOrNewCartItem = {
          quantity: addedItem.quantity + 1,
          productPrice: prodPrice,
          productTitle: proTitle,
          sum: addedItem.sum + prodPrice,
        }
      } else {
        updatedOrNewCartItem = {
          quantity: 1,
          productPrice: prodPrice,
          productTitle: proTitle,
          sum: addedItem.sum + prodPrice,
        }

        return {
          ...state,
          items: { ...items, [addedProduct.id]: updatedOrNewCartItem },
          totalAmount: totalAmount + prodPrice,
        }
      }

      // return { product: product}
    },
  },
})

export const totalAmount = (state: State) => state.cart.totalAmount

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions

export const cartReducer = cartSlice.reducer
