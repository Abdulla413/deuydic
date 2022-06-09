import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import lughetReducer from "../features/lughets/lughetSlice"

export const store = configureStore({
    reducer:{
        auth:authReducer,
        lughet:lughetReducer
    },
})