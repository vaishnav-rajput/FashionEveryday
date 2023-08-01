import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        add: (state, action) => {
            //action.payload indicates the input parameters provided to function
            state.push(action.payload)
        },
        remove: (state, action ) => {
            state.pop(action.payload)
        },
    }
}) 

export const {add, remove} = CartSlice.actions 
export default CartSlice.reducer