
//the name of the reducer is the name given to it in the slice where the slice was created

import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./slices/cartSlice";

  
export const store = configureStore({
    reducer : {
        cart : CartSlice
    }
})