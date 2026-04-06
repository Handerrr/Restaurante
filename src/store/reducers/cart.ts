import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Prato } from '../../models/Restaurant'

type CartState = {
  items: Prato[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Prato>) => {
      const pratos = state.items.find((item) => item.id === action.payload.id)

      if (!pratos) {
        state.items.push(action.payload)
      } else {
        alert('O prato ja está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
  },
})

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer
