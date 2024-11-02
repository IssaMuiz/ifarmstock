import {configureStore} from "@reduxjs/toolkit"
import {createWrapper} from 'next-redux-wrapper'
import cartReducer from './cartSlice'


const makeStore = () => configureStore({
reducer: {
  cart: cartReducer
}
})

export const wrapper = createWrapper(makeStore)