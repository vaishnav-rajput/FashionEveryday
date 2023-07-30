import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './slices/CounterSlice'

export const store = configureStore({
    //the name of the reducer is the name given to it in the slice where the slice was created
    counter: CounterSlice,
})
 
