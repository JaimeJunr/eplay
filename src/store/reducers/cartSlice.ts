import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../Pages/Home'

type CartState = {
  items: Game[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Game>) => {
      const gameExist = state.items.some(
        (item) => item.id === action.payload.id
      )

      if (!gameExist) {
        state.items.push(action.payload)
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id != action.payload)
    },
    hadleOpen: (state) => {
      state.isOpen = !state.isOpen
    }
  }
})

export const { add, hadleOpen, remove } = cartSlice.actions
export default cartSlice.reducer
