import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Prato } from '../../Models/Restaurant'

type CartState = {
  items: Prato[]
  isOpen: boolean
  step: 'cart' | 'address' | 'payment' | 'finished'
  orderId?: string

  delivery: {
    receiver: string
    address: string
    city: string
    cep: string
    number: string
    complement?: string
  } | null
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  step: 'cart',
  delivery: null,
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
    goToAddress: (state) => {
      state.step = 'address'
    },
    goToPayment: (state) => {
      state.step = 'payment'
    },
    goToFinished: (state, action: PayloadAction<string>) => {
      state.step = 'finished'
      state.orderId = action.payload
    },
    backToCart: (state) => {
      state.step = 'cart'
    },
    clear: (state) => {
      state.items = []
    },
    setDelivery: (state, action: PayloadAction<CartState['delivery']>) => {
      state.delivery = action.payload
    },
    reset: (state) => {
      state.step = 'cart'
      state.orderId = undefined
    },
  },
})

export const {
  add,
  open,
  close,
  remove,
  goToAddress,
  goToFinished,
  goToPayment,
  backToCart,
  clear,
  setDelivery,
  reset,
} = cartSlice.actions
export default cartSlice.reducer
