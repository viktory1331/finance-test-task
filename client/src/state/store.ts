import { configureStore } from '@reduxjs/toolkit'
import { reducer } from "./sharesReducer";

export const store = configureStore({
    reducer: {
        shares: reducer
    }
});